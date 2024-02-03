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
 * Model for cancellation set
 * @export
 * @interface PayPhoneButtonBusinessModelsCancellationSetModel
 */
export interface PayPhoneButtonBusinessModelsCancellationSetModel {
    /**
     * Annul id for get transaction
     * @type {number}
     * @memberof PayPhoneButtonBusinessModelsCancellationSetModel
     */
    id?: number;
}

/**
 * Check if a given object implements the PayPhoneButtonBusinessModelsCancellationSetModel interface.
 */
export function instanceOfPayPhoneButtonBusinessModelsCancellationSetModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayPhoneButtonBusinessModelsCancellationSetModelFromJSON(json: any): PayPhoneButtonBusinessModelsCancellationSetModel {
    return PayPhoneButtonBusinessModelsCancellationSetModelFromJSONTyped(json, false);
}

export function PayPhoneButtonBusinessModelsCancellationSetModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayPhoneButtonBusinessModelsCancellationSetModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function PayPhoneButtonBusinessModelsCancellationSetModelToJSON(value?: PayPhoneButtonBusinessModelsCancellationSetModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

