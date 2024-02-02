import {
  AbstractPaymentProcessor,
  Logger,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import {
  CancelApi,
  CancelApiApiKeys,
  SaleApi,
  SaleApiApiKeys,
} from "src/lib/payphone";

class PayphonePaymentProcessor extends AbstractPaymentProcessor {
  logger: Logger;
  apiKey: string;
  storeId: string;

  constructor(container, options) {
    super(container);
    this.logger = container.logger;
    this.apiKey = options.apiKey;
    this.storeId = options.storeId;
  }

  getIdentifier(): string {
    return "payphone";
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
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
        reference: ``,
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
    const api = new SaleApi();
    api.setApiKey(SaleApiApiKeys.Authorization, this.apiKey);

    const res = await api.saleSet({
      amount: (paymentSessionData.amount as number) * 1000,
      clientTransactionId: paymentSessionData.clientTransactionId as string,
      phoneNumber: paymentSessionData.phoneNumber as string,
      reference: paymentSessionData.reference as string,
      storeId: this.storeId,
      currency: "USD",
      chargeByNickName: false,
      countryCode: "593",
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
    const api = new SaleApi();
    api.setApiKey(SaleApiApiKeys.Authorization, this.apiKey);
    try {
      const res = await api.saleSet({
        amount: (paymentSessionData.amount as number) * 1000,
        clientTransactionId: paymentSessionData.clientTransactionId as string,
        phoneNumber: paymentSessionData.phoneNumber as string,
        reference: paymentSessionData.reference as string,
        storeId: this.storeId,
        currency: "USD",
        chargeByNickName: false,
        countryCode: "593",
      });

      return {
        status: PaymentSessionStatus.PENDING,
        data: {
          transactionId: res.body.transactionId,
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
    const api = new CancelApi();
    api.setApiKey(CancelApiApiKeys.Authorization, this.apiKey);
    try {
      const res = await api.cancelSet({
        id: paymentSessionData.transactionId as number,
      });
      if (res.body) {
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

  getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    throw new Error("Method not implemented.");
    // TODO: get payment status
  }

  refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.");
    // refund pottentailly exists but it is not documented
  }

  retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.");
  }

  updatePayment(
    context: PaymentProcessorContext
  ): Promise<void | PaymentProcessorError | PaymentProcessorSessionResponse> {
    throw new Error("Method not implemented.");
  }

  updatePaymentData(
    sessionId: string,
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.");
  }
}

export default PayphonePaymentProcessor;
