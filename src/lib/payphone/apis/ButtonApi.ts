// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PayPhoneButtonBusinessModelsPrepareSaleModel } from '../models/PayPhoneButtonBusinessModelsPrepareSaleModel';
import { PayPhoneButtonBusinessModelsPrepareSaleRequestModel } from '../models/PayPhoneButtonBusinessModelsPrepareSaleRequestModel';
import { PayPhoneButtonBusinessModelsSaleGetModelB } from '../models/PayPhoneButtonBusinessModelsSaleGetModelB';
import { PayPhonePaymentButtonModelsConfirmSaleRequestModel } from '../models/PayPhonePaymentButtonModelsConfirmSaleRequestModel';

/**
 * no description
 */
export class ButtonApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Post: Confirm the transaction receive from payment button
     * @param model 
     */
    public async buttonConfirmV2(model: PayPhonePaymentButtonModelsConfirmSaleRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("ButtonApi", "buttonConfirmV2", "model");
        }


        // Path Params
        const localVarPath = '/api/button/V2/Confirm';

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
            ObjectSerializer.serialize(model, "PayPhonePaymentButtonModelsConfirmSaleRequestModel", ""),
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
     * POST: Prepare the transaction for consume later by payment button
     * @param model 
     */
    public async buttonPrepare(model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("ButtonApi", "buttonPrepare", "model");
        }


        // Path Params
        const localVarPath = '/api/button/Prepare';

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
            ObjectSerializer.serialize(model, "PayPhoneButtonBusinessModelsPrepareSaleRequestModel", ""),
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

export class ButtonApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buttonConfirmV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buttonConfirmV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModelB >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsSaleGetModelB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleGetModelB", ""
            ) as PayPhoneButtonBusinessModelsSaleGetModelB;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsSaleGetModelB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsSaleGetModelB", ""
            ) as PayPhoneButtonBusinessModelsSaleGetModelB;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buttonPrepare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buttonPrepareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsPrepareSaleModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsPrepareSaleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsPrepareSaleModel", ""
            ) as PayPhoneButtonBusinessModelsPrepareSaleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsPrepareSaleModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsPrepareSaleModel", ""
            ) as PayPhoneButtonBusinessModelsPrepareSaleModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
