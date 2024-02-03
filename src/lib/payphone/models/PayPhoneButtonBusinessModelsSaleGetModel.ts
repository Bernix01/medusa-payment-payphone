/**
 * PayPhone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PayPhoneButtonBusinessModelsTaxModel } from '../models/PayPhoneButtonBusinessModelsTaxModel';
import { HttpFile } from '../http/http';

/**
* Sale get model
*/
export class PayPhoneButtonBusinessModelsSaleGetModel {
    /**
    * Customer email
    */
    'email'?: string;
    /**
    * Card type
    */
    'cardType'?: string;
    /**
    * External user identifier
    */
    'clientUserId'?: string;
    /**
    * Processor that served the request
    */
    'processor'?: string;
    /**
    * Card bin
    */
    'bin'?: string;
    /**
    * Últimos dígitos de la tarjeta
    */
    'lastDigits'?: string;
    /**
    * Deferred code
    */
    'deferredCode'?: string;
    /**
    * Deferred message
    */
    'deferredMessage'?: string;
    /**
    * Flag that indicate if the payment was deferred or not
    */
    'deferred'?: boolean;
    /**
    * Card brand code Example (Visa 50)
    */
    'cardBrandCode'?: string;
    /**
    * Card brand
    */
    'cardBrand'?: string;
    /**
    * Amount charged (Number)
    */
    'amount'?: number;
    /**
    * Client transaction id
    */
    'clientTransactionId'?: string;
    /**
    * Customer phone number
    */
    'phoneNumber'?: string;
    /**
    * Transaction status code Example(1)
    */
    'statusCode'?: number;
    /**
    * Transaction status Example(Canceled)
    */
    'transactionStatus'?: string;
    /**
    * Authorization code emiting by bank, this field have value is transaction status was approved
    */
    'authorizationCode'?: string;
    /**
    * Message for error
    */
    'message'?: string;
    /**
    * Message code for the reason why transaction not approved
    */
    'messageCode'?: number;
    /**
    * PayPhone transaction id
    */
    'transactionId'?: number;
    /**
    * Customer Document id
    */
    'document'?: string;
    /**
    * Taxes apply to current transaction
    */
    'taxes'?: Array<PayPhoneButtonBusinessModelsTaxModel>;
    /**
    * ISO code A of transaction currency
    */
    'currency'?: string;
    /**
    * Optional parameter 1
    */
    'optionalParameter1'?: string;
    /**
    * Optional parameter 2
    */
    'optionalParameter2'?: string;
    /**
    * Optional parameter 3
    */
    'optionalParameter3'?: string;
    /**
    * Optional parameter 4
    */
    'optionalParameter4'?: string;
    /**
    * Store name
    */
    'storeName'?: string;
    /**
    * Fecha en la que se realizo la transacción
    */
    'date'?: Date;
    /**
    * ISO code de la region de la tienda que recibió el pago
    */
    'regionIso'?: string;
    'transactionType'?: string;
    'recap'?: string;
    'reference'?: string;
    'canBypassRedirection'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "cardType",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientUserId",
            "baseName": "clientUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string",
            "format": ""
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastDigits",
            "baseName": "lastDigits",
            "type": "string",
            "format": ""
        },
        {
            "name": "deferredCode",
            "baseName": "deferredCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "deferredMessage",
            "baseName": "deferredMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "deferred",
            "baseName": "deferred",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cardBrandCode",
            "baseName": "cardBrandCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardBrand",
            "baseName": "cardBrand",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "clientTransactionId",
            "baseName": "clientTransactionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "transactionStatus",
            "baseName": "transactionStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizationCode",
            "baseName": "authorizationCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageCode",
            "baseName": "messageCode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<PayPhoneButtonBusinessModelsTaxModel>",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionalParameter1",
            "baseName": "optionalParameter1",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionalParameter2",
            "baseName": "optionalParameter2",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionalParameter3",
            "baseName": "optionalParameter3",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionalParameter4",
            "baseName": "optionalParameter4",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeName",
            "baseName": "storeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "regionIso",
            "baseName": "regionIso",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "string",
            "format": ""
        },
        {
            "name": "recap",
            "baseName": "recap",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "canBypassRedirection",
            "baseName": "canBypassRedirection",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsSaleGetModel.attributeTypeMap;
    }

    public constructor() {
    }
}

