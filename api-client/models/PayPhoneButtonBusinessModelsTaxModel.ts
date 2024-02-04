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
* 
*/
export class PayPhoneButtonBusinessModelsTaxModel {
    /**
    * Tax name
    */
    'name'?: string;
    /**
    * Tax amount charged the sum of value and tax field
    */
    'amount'?: number;
    /**
    * Tax value
    */
    'value'?: number;
    /**
    * Tax apply for current tax
    */
    'tax'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PayPhoneButtonBusinessModelsTaxModel.attributeTypeMap;
    }

    public constructor() {
    }
}
