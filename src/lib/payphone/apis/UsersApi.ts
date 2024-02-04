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


import { PayPhoneButtonBusinessModelsUserModel } from '../models/PayPhoneButtonBusinessModelsUserModel';

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Check active users
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public async usersCheckUser(number: string, prefix: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'number' is not null or undefined
        if (number === null || number === undefined) {
            throw new RequiredError("UsersApi", "usersCheckUser", "number");
        }


        // verify required parameter 'prefix' is not null or undefined
        if (prefix === null || prefix === undefined) {
            throw new RequiredError("UsersApi", "usersCheckUser", "prefix");
        }


        // Path Params
        const localVarPath = '/api/Users/check/{number}/region/{prefix}'
            .replace('{' + 'number' + '}', encodeURIComponent(String(number)))
            .replace('{' + 'prefix' + '}', encodeURIComponent(String(prefix)));

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
     * Get user by phone number
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public async usersGet(number: string, prefix: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'number' is not null or undefined
        if (number === null || number === undefined) {
            throw new RequiredError("UsersApi", "usersGet", "number");
        }


        // verify required parameter 'prefix' is not null or undefined
        if (prefix === null || prefix === undefined) {
            throw new RequiredError("UsersApi", "usersGet", "prefix");
        }


        // Path Params
        const localVarPath = '/api/Users/{number}/region/{prefix}'
            .replace('{' + 'number' + '}', encodeURIComponent(String(number)))
            .replace('{' + 'prefix' + '}', encodeURIComponent(String(prefix)));

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
     * Get user by nickname
     * @param number Nickname
     * @param prefix Country phone prefix
     */
    public async usersGetByNickname(number: string, prefix: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'number' is not null or undefined
        if (number === null || number === undefined) {
            throw new RequiredError("UsersApi", "usersGetByNickname", "number");
        }


        // verify required parameter 'prefix' is not null or undefined
        if (prefix === null || prefix === undefined) {
            throw new RequiredError("UsersApi", "usersGetByNickname", "prefix");
        }


        // Path Params
        const localVarPath = '/api/Users/nickname/{number}/region/{prefix}'
            .replace('{' + 'number' + '}', encodeURIComponent(String(number)))
            .replace('{' + 'prefix' + '}', encodeURIComponent(String(prefix)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class UsersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersCheckUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersCheckUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsUserModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsUserModel", ""
            ) as PayPhoneButtonBusinessModelsUserModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsUserModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsUserModel", ""
            ) as PayPhoneButtonBusinessModelsUserModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersGetByNickname
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersGetByNicknameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayPhoneButtonBusinessModelsUserModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsUserModel", ""
            ) as PayPhoneButtonBusinessModelsUserModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PayPhoneButtonBusinessModelsUserModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayPhoneButtonBusinessModelsUserModel", ""
            ) as PayPhoneButtonBusinessModelsUserModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
