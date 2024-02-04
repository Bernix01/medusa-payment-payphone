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
* Request annul model
*/
export class PayPhonePaymentButtonModelsCancellationSetRequestModel {
    /**
    * Transaction id of sale to annul
    */
    'id': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PayPhonePaymentButtonModelsCancellationSetRequestModel.attributeTypeMap;
    }

    public constructor() {
    }
}
