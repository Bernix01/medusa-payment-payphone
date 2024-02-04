import {
  AbstractPaymentProcessor,
  CartService,
  Logger,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { MedusaError } from "medusa-core-utils";
import { nanoid } from "nanoid";
import {
  ApiException,
  AuthorizationAuthentication,
  CancelApi,
  LinksApi,
  PayPhonePaymentButtonModelsLinkViewModel,
  ReverseApi,
  SaleApi,
  createConfiguration,
} from "../lib/payphone";

class PayphonePaymentService extends AbstractPaymentProcessor {
  protected readonly logger: Logger;
  protected readonly apiKey: string;
  protected readonly storeId: string;
  protected readonly cartService: CartService;
  protected readonly saleApi: SaleApi;
  protected readonly cancelApi: CancelApi;
  protected readonly linksApi: LinksApi;
  private readonly reverseApi: ReverseApi;

  static identifier = "payphone";

  constructor(container, options) {
    super(container, options);
    this.logger = container.logger;
    // this.apiKey = process.env.PAYPHONE_TOKEN;
    // this.storeId = process.env.PAYPHONE_STORE_ID;
    this.saleApi = new SaleApi(
      createConfiguration({
        authMethods: {
          default: new AuthorizationAuthentication(`Bearer ${this.apiKey}`),
        },
      })
    );
    this.cancelApi = new CancelApi(
      createConfiguration({
        authMethods: { Authorization: `Bearer ${this.apiKey}` },
      })
    );
    this.reverseApi = new ReverseApi(
      createConfiguration({
        authMethods: { Authorization: `Bearer ${this.apiKey}` },
      })
    );
    this.linksApi = new LinksApi(
      createConfiguration({
        authMethods: {
          default: new AuthorizationAuthentication(`Bearer ${this.apiKey}`),
        },
      })
    );
    this.apiKey = options.apiKey;
    this.storeId = options.storeId;
    this.cartService = container.cartService;
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    const cartId = context.resource_id;
    const cart = await this.cartService.retrieve(cartId, {
      relations: ["customer", "billing_address"],
    });
    if (!cart.billing_address?.phone && !context.customer?.phone) {
      this.logger.error("No phone number provided", context);
      this.logger.error("No phone number resolved", cart);
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
        phone: cart.billing_address.phone || cart.customer.phone,
        reference: context.resource_id,
        clientTransactionId: nanoid(15),
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

    const res = await this.saleApi.saleSet({
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
    const cart = await this.cartService.retrieveWithTotals(
      context.cart_id as string,
      {
        relations: ["customer", "billing_address", "payment"],
      }
    );

    try {
      const createPaymentPayload: PayPhonePaymentButtonModelsLinkViewModel = {
        amount: cart.total,
        expireIn: 1,
        isAmountEditable: false,
        isMassive: false,
        oneTime: true,
        storeId: this.storeId,
        currency: "usd",
        amountWithTax: cart.subtotal + cart.shipping_total,
        tax: cart.tax_total,
        clientTransactionId: paymentSessionData.clientTransactionId as string,
        reference: paymentSessionData.reference as string,
        additionalData: JSON.stringify({
          foo: "bar",
        }),
        // storeId: this.storeId,
        // clientUserId: cart.customer_id,
        // currency: "USD",
        // email: cart.email,
        // chargeByNickName: false,
        // order: {
        //   billTo: {
        //     firstName: cart.billing_address.first_name,
        //     lastName: cart.billing_address.last_name,
        //     address1: cart.billing_address.address_1,
        //     country: cart.billing_address.country.display_name,
        //     state: cart.billing_address.province,
        //     postalCode: cart.billing_address.postal_code,
        //     email: cart.email,
        //     address2: cart.billing_address.address_2,
        //     locality: cart.billing_address.city,
        //     phoneNumber: cart.billing_address.phone,
        //   },
        //   lineItems: cart.items.map<PayPhoneButtonBusinessModelsLineItem>(
        //     (item) => {
        //       return {
        //         name: item.title,
        //         quantity: item.quantity,
        //         unitPrice: item.unit_price,
        //         taxAmount: item.tax_total,
        //         productDescription: item.description,
        //         productSKU: item.variant.sku,
        //         totalAmount: item.total,
        //       };
        //     }
        //   ),
        // },
        // optionalParameter1: "",
        // optionalParameter2: "",
        // optionalParameter3: "",
      };
      this.logger.error("Creating payment with cart", cart);
      this.logger.error("Creating payment with payload", createPaymentPayload);
      const res = await this.linksApi.linksPost(createPaymentPayload);

      return {
        status: PaymentSessionStatus.REQUIRES_MORE,
        data: {
          paymentUrl: res,
        },
      };
    } catch (e) {
      this.logger.error(e);
      if (e instanceof ApiException) {
        if (e.code === 400) {
          return {
            error: e.name,
            code: `PAYMENT_AUTHORIZATION_ERROR_${e.body.Code}`,
            detail: `Payphone no pudo procesar la solicitud: ${e.message}\n\t${e.body.Message})}`,
          };
        }

        //   {
        //     "message": "La transacción no pudo ser creada por favor inténtelo de nuevo",
        //     "errorCode": 22,
        //     "errors": [
        //         {
        //             "message": "El cliente tiene transacciones pendientes con su local",
        //             "errorCode": 2061
        //         }
        //     ]
        // }

        return {
          error: "Fallo la creación del pago",
          code: "PAYMENT_AUTHORIZATION_ERROR",
          detail: "Payphone no pudo procesar la solicitud",
        };
      }
    }
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    if (!paymentSessionData.transactionId) {
      return {
        error: "No transaction id",
        code: "PAYMENT_RETRIEVAL_ERROR",
        detail: "No transaction id in session data",
      };
    }

    try {
      const res = await this.cancelApi.cancelSet({
        id: paymentSessionData.transactionId as number,
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

  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    // no need to delete a payment in payphone
    return { status: "deleted" };
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    try {
      if (!paymentSessionData.transactionId) {
        return PaymentSessionStatus.REQUIRES_MORE;
      }

      const res = await this.saleApi.saleGet(
        paymentSessionData.transactionId as number
      );

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
      return PaymentSessionStatus.REQUIRES_MORE;
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

    if (!paymentSessionData.transactionId) {
      return {
        error: "Sin id de transacción.",
        code: "PAYMENT_REFUND_ERROR",
        detail:
          "No se puede reembolsar un pago sin un id de transacción con payphone",
      };
    }

    try {
      const res = await this.reverseApi.reverseSet({
        id: paymentSessionData.transactionId as number,
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
    if (!paymentSessionData.transactionId) {
      return {
        error: "No transaction id",
        code: "PAYMENT_RETRIEVAL_ERROR",
        detail: "No transaction id in session data",
      };
    }

    try {
      const res = await this.saleApi.saleGet(
        paymentSessionData.transactionId as number
      );

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
    const cartId = context.resource_id;
    const cart = await this.cartService.retrieve(cartId, {
      relations: ["customer", "billing_address"],
    });
    if (!cart.billing_address?.phone && !context.customer?.phone) {
      this.logger.error("No phone number provided", context);
      this.logger.error("No phone number resolved", cart);
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
        phone: cart.billing_address.phone || cart.customer.phone,
        reference: context.resource_id, // TODO: set reference
        clientTransactionId:
          context.paymentSessionData.clientTransactionId || nanoid(15),
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
