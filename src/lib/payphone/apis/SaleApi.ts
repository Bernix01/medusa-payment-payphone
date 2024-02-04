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


import { PayPhoneButtonBusinessModelsSaleGetModel } from '../models/PayPhoneButtonBusinessModelsSaleGetModel';
import { PayPhoneButtonBusinessModelsSaleModel } from '../models/PayPhoneButtonBusinessModelsSaleModel';
import { PayPhoneButtonBusinessViewModelsSaleRequestModel } from '../models/PayPhoneButtonBusinessViewModelsSaleRequestModel';

/**
 * no description
 */
export class SaleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get transaction by id
     * @param id Transaction identifier
     */
    public async saleGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SaleApi", "saleGet", "id");
        }


        // Path Params
        const localVarPath = '/api/Sale/{id}'
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
     * Get transaction by client transaction id
     * @param clientId Client transaction id
     */
    public async saleGetByClient(clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("SaleApi", "saleGetByClient", "clientId");
        }


        // Path Params
        const localVarPath = '/api/Sale/client/{clientId}'
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
     * Create transaction and send notification to customer
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     */
    public async saleSet(model: PayPhoneButtonBusinessViewModelsSaleRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("SaleApi", "saleSet", "model");
        }


        // Path Params
        const localVarPath = '/api/Sale';

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
            ObjectSerializer.serialize(model, "PayPhoneButtonBusinessViewModelsSaleRequestModel", ""),
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

export class SaleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to saleGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async saleGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsSaleGetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleGetModel", ""
            ) as PayPhoneButtonBusinessModelsSaleGetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsSaleGetModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleGetModel", ""
            ) as PayPhoneButtonBusinessModelsSaleGetModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to saleGetByClient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async saleGetByClientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PayPhoneButtonBusinessModelsSaleGetModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PayPhoneButtonBusinessModelsSaleGetModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PayPhoneButtonBusinessModelsSaleGetModel>", ""
            ) as Array<PayPhoneButtonBusinessModelsSaleGetModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PayPhoneButtonBusinessModelsSaleGetModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PayPhoneButtonBusinessModelsSaleGetModel>", ""
            ) as Array<PayPhoneButtonBusinessModelsSaleGetModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to saleSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async saleSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsSaleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleModel", ""
            ) as PayPhoneButtonBusinessModelsSaleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsSaleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleModel", ""
            ) as PayPhoneButtonBusinessModelsSaleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
