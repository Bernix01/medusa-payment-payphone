/**
 * PayPhone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "clientTransactionId",
            "baseName": "clientTransactionId",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsSale.attributeTypeMap;
    }
}

