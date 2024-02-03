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

/**
* Details of canceled sale
*/
export class PayPhoneButtonBusinessModelsSale {
    /**
    * Canceled sale id
    */
    'id'?: number;
    /**
    * Canceled sale status code
    */
    'statusCode'?: number;
    /**
    * Canceled sale literal status
    */
    'status'?: string;
    /**
    * Client transaction id
    */
    'clientTransactionId'?: string;
    /**
    * Message for the cancelled transaction
    */
    'message'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "status",
            "baseName": "status",
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
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsSale.attributeTypeMap;
    }

    public constructor() {
    }
}

