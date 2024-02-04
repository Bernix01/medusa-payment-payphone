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

import { PayPhoneButtonBusinessModelsSale } from '../models/PayPhoneButtonBusinessModelsSale';
import { HttpFile } from '../http/http';

/**
* Cancellation model
*/
export class PayPhoneButtonBusinessModelsCancellationModel {
    /**
    * Cancellation identifier
    */
    'id'?: number;
    /**
    * Status code of cancellation
    */
    'statusCode'?: number;
    /**
    * Literal status of cancellation
    */
    'status'?: string;
    /**
    * Client transaction id
    */
    'clientTransactionId'?: string;
    'sale'?: PayPhoneButtonBusinessModelsSale;
    /**
    * Message for this annul
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
            "name": "sale",
            "baseName": "sale",
            "type": "PayPhoneButtonBusinessModelsSale",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsCancellationModel.attributeTypeMap;
    }

    public constructor() {
    }
}
