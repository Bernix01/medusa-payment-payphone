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


import * as runtime from '../runtime';
import type {
  PayPhoneButtonBusinessModelsCancellationModel,
  PayPhoneButtonBusinessModelsCancellationSetModel,
  PayPhonePaymentButtonModelsCancellationSetByClientRequestModel,
  PayPhonePaymentButtonModelsCancellationSetRequestModel,
} from '../models/index';
import {
    PayPhoneButtonBusinessModelsCancellationModelFromJSON,
    PayPhoneButtonBusinessModelsCancellationModelToJSON,
    PayPhoneButtonBusinessModelsCancellationSetModelFromJSON,
    PayPhoneButtonBusinessModelsCancellationSetModelToJSON,
    PayPhonePaymentButtonModelsCancellationSetByClientRequestModelFromJSON,
    PayPhonePaymentButtonModelsCancellationSetByClientRequestModelToJSON,
    PayPhonePaymentButtonModelsCancellationSetRequestModelFromJSON,
    PayPhonePaymentButtonModelsCancellationSetRequestModelToJSON,
} from '../models/index';

export interface AnnulGetRequest {
    id: number;
}

export interface AnnulGetByClientIdRequest {
    clientId: string;
}

export interface AnnulSetRequest {
    model: PayPhonePaymentButtonModelsCancellationSetRequestModel;
}

export interface AnnulSetByClientIdRequest {
    model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel;
}

/**
 * 
 */
export class AnnulApi extends runtime.BaseAPI {

    /**
     * GET: the annul by his id
     */
    async annulGetRaw(requestParameters: AnnulGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayPhoneButtonBusinessModelsCancellationModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling annulGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Annul/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayPhoneButtonBusinessModelsCancellationModelFromJSON(jsonValue));
    }

    /**
     * GET: the annul by his id
     */
    async annulGet(requestParameters: AnnulGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        const response = await this.annulGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET: the annul by client transaction id
     */
    async annulGetByClientIdRaw(requestParameters: AnnulGetByClientIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayPhoneButtonBusinessModelsCancellationModel>> {
        if (requestParameters.clientId === null || requestParameters.clientId === undefined) {
            throw new runtime.RequiredError('clientId','Required parameter requestParameters.clientId was null or undefined when calling annulGetByClientId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Annul/client/{clientId}`.replace(`{${"clientId"}}`, encodeURIComponent(String(requestParameters.clientId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayPhoneButtonBusinessModelsCancellationModelFromJSON(jsonValue));
    }

    /**
     * GET: the annul by client transaction id
     */
    async annulGetByClientId(requestParameters: AnnulGetByClientIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        const response = await this.annulGetByClientIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     */
    async annulSetRaw(requestParameters: AnnulSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling annulSet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Annul`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PayPhonePaymentButtonModelsCancellationSetRequestModelToJSON(requestParameters.model),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayPhoneButtonBusinessModelsCancellationSetModelFromJSON(jsonValue));
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     */
    async annulSet(requestParameters: AnnulSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        const response = await this.annulSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     */
    async annulSetByClientIdRaw(requestParameters: AnnulSetByClientIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling annulSetByClientId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Annul/client`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PayPhonePaymentButtonModelsCancellationSetByClientRequestModelToJSON(requestParameters.model),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayPhoneButtonBusinessModelsCancellationSetModelFromJSON(jsonValue));
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     */
    async annulSetByClientId(requestParameters: AnnulSetByClientIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        const response = await this.annulSetByClientIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
