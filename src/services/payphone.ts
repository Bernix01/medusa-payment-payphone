import {
  AbstractPaymentProcessor,
  CartService,
  Logger,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { CancelApi, ReverseApi, SaleApi } from "../lib/payphone/apis";
import { Configuration } from "../lib/payphone/runtime";
import { MedusaError } from "medusa-core-utils";

class PayphonePaymentService extends AbstractPaymentProcessor {
  protected readonly logger: Logger;
  protected readonly apiKey: string;
  protected readonly storeId: string;
  protected readonly cartService: CartService;

  static identifier = "payphone";

  constructor(container, options) {
    super(container, options);
    this.logger = container.logger;
    this.apiKey = options.apiKey;
    this.storeId = options.storeId;
    this.cartService = container.cartService;
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    const cartId = context.resource_id;
    const cart = await this.cartService.retrieve(cartId, {
      relations: ["customer"],
    });

    if (!cart.billing_address.phone && !context.customer?.phone) {
      this.logger.error("No phone number provided", context);
      return {
        error: "No se ha provisto un número de teléfono",
        code: "MISSING_PHONE_NUMBER",
        detail:
          "Es necesario proveer un número de teléfono para realizar el pago con payphone",
      };
    }

    return {
      session_data: {
        intent: "sale",
        amount: context.amount,
        phone: context.customer.phone || cart.billing_address.phone,
        reference: context.resource_id,
      },
      update_requests: {
        customer_metadata: {
          payphone: {
            intent: "sale",
          },
        },
      },
    };
  }

  async capturePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    // TODO: generate a new payment request
    const api = new SaleApi(new Configuration({ apiKey: this.apiKey }));

    const res = await api.saleSet({
      model: {
        amount: (paymentSessionData.amount as number) * 1000,
        clientTransactionId: paymentSessionData.clientTransactionId as string,
        phoneNumber: paymentSessionData.phoneNumber as string,
        reference: paymentSessionData.reference as string,
        storeId: this.storeId,
        currency: "USD",
        chargeByNickName: false,
        countryCode: "593",
      },
    });

    return;
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<
    | PaymentProcessorError
    | { status: PaymentSessionStatus; data: Record<string, unknown> }
  > {
    const api = new SaleApi(new Configuration({ apiKey: this.apiKey }));
    try {
      const res = await api.saleSet({
        model: {
          amount: (paymentSessionData.amount as number) * 1000,
          clientTransactionId: paymentSessionData.clientTransactionId as string,
          phoneNumber: paymentSessionData.phoneNumber as string,
          reference: paymentSessionData.reference as string,
          storeId: this.storeId,
          currency: "USD",
          chargeByNickName: false,
          countryCode: "593",
        },
      });

      return {
        status: PaymentSessionStatus.PENDING,
        data: {
          transactionId: res.transactionId,
        },
      };
    } catch (e) {
      this.logger.error(e);

      return {
        error: "Error autorizando el pago",
        code: "PAYMENT_AUTHORIZATION_ERROR",
        detail: "Error autorizando el pago con payphone",
      };
    }
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    const api = new CancelApi(new Configuration({ apiKey: this.apiKey }));

    try {
      const res = await api.cancelSet({
        model: {
          id: paymentSessionData.transactionId as number,
        },
      });
      if (res) {
        return {
          status: "cancelled",
        };
      } else {
        return {
          error: "Error cancelando el pago",
          code: "PAYMENT_CANCEL_ERROR",
          detail: "Error cancelando el pago con payphone",
        };
      }
    } catch (e) {
      this.logger.error(e);
      return {
        error: "Error cancelando el pago",
        code: "PAYMENT_CANCEL_ERROR",
        detail: "Error cancelando el pago con payphone",
      };
    }
  }

  deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.");
    // no soportado por payphone
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    const api = new SaleApi(new Configuration({ apiKey: this.apiKey }));
    try {
      const res = await api.saleGet({
        id: paymentSessionData.transactionId as number,
      });

      if (res.statusCode === 3) {
        return PaymentSessionStatus.AUTHORIZED;
      }

      if (res.statusCode === 2) {
        return PaymentSessionStatus.ERROR;
      }

      this.logger.error(
        "Transaction status not approved or declined. There was an error somewhere.",
        res
      );
      return PaymentSessionStatus.ERROR;
    } catch (e) {
      this.logger.error("Error getting payment status", e);
      return PaymentSessionStatus.PENDING;
    }
  }

  async refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    if (refundAmount !== paymentSessionData.amount) {
      return {
        error: "No se puede reembolsar un monto diferente al original",
        code: "PAYMENT_REFUND_ERROR",
        detail:
          "No se puede reembolsar un monto diferente al original con payphone",
      };
    }
    const api = new ReverseApi(new Configuration({ apiKey: this.apiKey }));
    try {
      const res = await api.reverseSet({
        model: {
          id: paymentSessionData.transactionId as number,
        },
      });
      if (res) {
        return {
          status: "refunded",
        };
      }
      return {
        error: "Error de paypreembolsando el pago",
        code: "PAYMENT_REFUND_ERROR",
        detail: "Error reembolsando el pago con payphone",
      };
    } catch (e) {
      this.logger.error("Error refunding payment", e);
      return {
        error: "Error reembolsando el pago",
        code: "PAYMENT_REFUND_ERROR",
        detail: e.message,
      };
    }
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    const api = new SaleApi(new Configuration({ apiKey: this.apiKey }));
    try {
      const res = await api.saleGet({
        id: paymentSessionData.transactionId as number,
      });

      return res as Record<string, unknown>;
    } catch (e) {
      this.logger.error("Error getting payment status", e);
      return {
        error: "Error obteniendo el pago",
        code: "PAYMENT_RETRIEVAL_ERROR",
        detail: e.message,
      };
    }
  }

  async updatePayment(
    context: PaymentProcessorContext
  ): Promise<void | PaymentProcessorError | PaymentProcessorSessionResponse> {
    if (!context.customer?.phone) {
      return {
        error: "No se ha provisto un número de teléfono",
        code: "MISSING_PHONE_NUMBER",
        detail:
          "Es necesario proveer un número de teléfono para realizar el pago con payphone",
      };
    }

    return {
      session_data: {
        intent: "sale",
        amount: context.amount,
        phone: context.customer.phone,
        reference: context.resource_id, // TODO: set reference
      },
      update_requests: {
        customer_metadata: {
          payphone: {
            intent: "sale",
          },
        },
      },
    };
  }

  async updatePaymentData(
    sessionId: string,
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    try {
      // Prevent from updating the amount from here as it should go through
      // the updatePayment method to perform the correct logic
      if (data.amount) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Cannot update amount, use updatePayment instead"
        );
      }

      if (data.clientTransactionId) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Cannot update clientTransactionId as it is immutable"
        );
      }

      if (data.transactionId) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Cannot update transactionId as it is immutable"
        );
      }
      return data;
    } catch (e) {
      this.logger.error("Error updating payment session data", e);
      return {
        error: "Error updating payment session data",
        code: "PAYMENT_UPDATE_ERROR",
        detail: e.message,
      };
    }
  }
}

export default PayphonePaymentService;
