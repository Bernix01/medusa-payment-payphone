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

import { PayPhoneButtonBusinessModelsPassenger } from '../models/PayPhoneButtonBusinessModelsPassenger';
import { HttpFile } from '../http/http';

export class PayPhoneButtonBusinessModelsLineItem {
    'productName'?: string;
    'unitPrice'?: number;
    'quantity'?: number;
    'totalAmount'?: number;
    'taxAmount'?: number;
    'productSKU'?: string;
    'productDescription'?: string;
    'shippingDestinationTypes'?: string;
    'passenger'?: PayPhoneButtonBusinessModelsPassenger;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "productSKU",
            "baseName": "productSKU",
            "type": "string",
            "format": ""
        },
        {
            "name": "productDescription",
            "baseName": "productDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingDestinationTypes",
            "baseName": "shippingDestinationTypes",
            "type": "string",
            "format": ""
        },
        {
            "name": "passenger",
            "baseName": "passenger",
            "type": "PayPhoneButtonBusinessModelsPassenger",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsLineItem.attributeTypeMap;
    }

    public constructor() {
    }
}

