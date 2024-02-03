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

import { HttpFile } from '../http/http';

export class PayPhonePaymentButtonModelsLinkViewModel {
    /**
    * Transaction amount
    */
    'amount': number;
    /**
    * Transaction tax
    */
    'tax'?: number;
    /**
    * Transaction amount with tax
    */
    'amountWithTax'?: number;
    /**
    * Trasnaction amount without tax
    */
    'amountWithoutTax'?: number;
    /**
    * Service amount
    */
    'service'?: number;
    /**
    * Tip amount
    */
    'tip'?: number;
    /**
    * Currency to charge in ISO 4217 (USD)
    */
    'currency': string;
    /**
    * Reference describing the transaction MAX(50 characters)
    */
    'reference'?: string;
    /**
    * Transaction identifier Max(50)
    */
    'clientTransactionId': string;
    /**
    * Store identifier. It can be found in the developer\'s console
    */
    'storeId'?: string;
    /**
    * (Optional) Additional parameters, accept a json
    */
    'additionalData'?: string;
    /**
    * The link only can pay one time, the pay must be approved
    */
    'oneTime'?: boolean;
    /**
    * When the link is no longer available in hours
    */
    'expireIn'?: number;
    /**
    * Si aplica monto editable
    */
    'isAmountEditable'?: boolean;
    /**
    * Si es masivo o no
    */
    'isMassive'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "amountWithTax",
            "baseName": "amountWithTax",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "amountWithoutTax",
            "baseName": "amountWithoutTax",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tip",
            "baseName": "tip",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currency",
            "baseName": "currency",
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
            "name": "clientTransactionId",
            "baseName": "clientTransactionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "string",
            "format": ""
        },
        {
            "name": "oneTime",
            "baseName": "oneTime",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expireIn",
            "baseName": "expireIn",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isAmountEditable",
            "baseName": "isAmountEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMassive",
            "baseName": "isMassive",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayPhonePaymentButtonModelsLinkViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

