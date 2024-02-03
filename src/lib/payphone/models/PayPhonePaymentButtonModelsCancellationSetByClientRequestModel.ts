/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
 */
export interface PayPhonePaymentButtonModelsCancellationSetByClientRequestModel {
    /**
     * Client transaction id
     * @type {string}
     * @memberof PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
     */
    clientId: string;
}

/**
 * Check if a given object implements the PayPhonePaymentButtonModelsCancellationSetByClientRequestModel interface.
 */
export function instanceOfPayPhonePaymentButtonModelsCancellationSetByClientRequestModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clientId" in value;

    return isInstance;
}

export function PayPhonePaymentButtonModelsCancellationSetByClientRequestModelFromJSON(json: any): PayPhonePaymentButtonModelsCancellationSetByClientRequestModel {
    return PayPhonePaymentButtonModelsCancellationSetByClientRequestModelFromJSONTyped(json, false);
}

export function PayPhonePaymentButtonModelsCancellationSetByClientRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayPhonePaymentButtonModelsCancellationSetByClientRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': json['clientId'],
    };
}

export function PayPhonePaymentButtonModelsCancellationSetByClientRequestModelToJSON(value?: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
    };
}

