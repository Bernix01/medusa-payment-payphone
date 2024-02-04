// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PayPhoneButtonBusinessModelsCancellationModel } from '../models/PayPhoneButtonBusinessModelsCancellationModel';
import { PayPhoneButtonBusinessModelsCancellationSetModel } from '../models/PayPhoneButtonBusinessModelsCancellationSetModel';
import { PayPhonePaymentButtonModelsCancellationSetByClientRequestModel } from '../models/PayPhonePaymentButtonModelsCancellationSetByClientRequestModel';
import { PayPhonePaymentButtonModelsCancellationSetRequestModel } from '../models/PayPhonePaymentButtonModelsCancellationSetRequestModel';

/**
 * no description
 */
export class AnnulApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * GET: the annul by his id
     * @param id Annul id
     */
    public async annulGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AnnulApi", "annulGet", "id");
        }


        // Path Params
        const localVarPath = '/api/Annul/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * GET: the annul by client transaction id
     * @param clientId Client transaction id
     */
    public async annulGetByClientId(clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("AnnulApi", "annulGetByClientId", "clientId");
        }


        // Path Params
        const localVarPath = '/api/Annul/client/{clientId}'
            .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public async annulSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("AnnulApi", "annulSet", "model");
        }


        // Path Params
        const localVarPath = '/api/Annul';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/xml",
        
            "text/xml",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(model, "PayPhonePaymentButtonModelsCancellationSetRequestModel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public async annulSetByClientId(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("AnnulApi", "annulSetByClientId", "model");
        }


        // Path Params
        const localVarPath = '/api/Annul/client';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/xml",
        
            "text/xml",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(model, "PayPhonePaymentButtonModelsCancellationSetByClientRequestModel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AnnulApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to annulGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async annulGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsCancellationModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsCancellationModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to annulGetByClientId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async annulGetByClientIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsCancellationModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsCancellationModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to annulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async annulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsCancellationSetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationSetModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationSetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsCancellationSetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationSetModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationSetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to annulSetByClientId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async annulSetByClientIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsCancellationSetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationSetModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationSetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsCancellationSetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsCancellationSetModel", ""
            ) as PayPhoneButtonBusinessModelsCancellationSetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
