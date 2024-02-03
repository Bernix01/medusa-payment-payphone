import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { PayPhoneButtonBusinessModelsCancellationModel } from '../models/PayPhoneButtonBusinessModelsCancellationModel';
import { PayPhoneButtonBusinessModelsCancellationSetModel } from '../models/PayPhoneButtonBusinessModelsCancellationSetModel';
import { PayPhoneButtonBusinessModelsLineItem } from '../models/PayPhoneButtonBusinessModelsLineItem';
import { PayPhoneButtonBusinessModelsOrder } from '../models/PayPhoneButtonBusinessModelsOrder';
import { PayPhoneButtonBusinessModelsPassenger } from '../models/PayPhoneButtonBusinessModelsPassenger';
import { PayPhoneButtonBusinessModelsPrepareSaleModel } from '../models/PayPhoneButtonBusinessModelsPrepareSaleModel';
import { PayPhoneButtonBusinessModelsPrepareSaleRequestModel } from '../models/PayPhoneButtonBusinessModelsPrepareSaleRequestModel';
import { PayPhoneButtonBusinessModelsRegionModel } from '../models/PayPhoneButtonBusinessModelsRegionModel';
import { PayPhoneButtonBusinessModelsSale } from '../models/PayPhoneButtonBusinessModelsSale';
import { PayPhoneButtonBusinessModelsSaleGetModel } from '../models/PayPhoneButtonBusinessModelsSaleGetModel';
import { PayPhoneButtonBusinessModelsSaleGetModelB } from '../models/PayPhoneButtonBusinessModelsSaleGetModelB';
import { PayPhoneButtonBusinessModelsSaleModel } from '../models/PayPhoneButtonBusinessModelsSaleModel';
import { PayPhoneButtonBusinessModelsTaxModel } from '../models/PayPhoneButtonBusinessModelsTaxModel';
import { PayPhoneButtonBusinessModelsUserModel } from '../models/PayPhoneButtonBusinessModelsUserModel';
import { PayPhoneButtonBusinessViewModelsSaleRequestModel } from '../models/PayPhoneButtonBusinessViewModelsSaleRequestModel';
import { PayPhoneISO8583ModelsPayPhoneBillTo } from '../models/PayPhoneISO8583ModelsPayPhoneBillTo';
import { PayPhonePaymentButtonModelsCancellationSetByClientRequestModel } from '../models/PayPhonePaymentButtonModelsCancellationSetByClientRequestModel';
import { PayPhonePaymentButtonModelsCancellationSetRequestModel } from '../models/PayPhonePaymentButtonModelsCancellationSetRequestModel';
import { PayPhonePaymentButtonModelsConfirmSaleRequestModel } from '../models/PayPhonePaymentButtonModelsConfirmSaleRequestModel';
import { PayPhonePaymentButtonModelsLinkViewModel } from '../models/PayPhonePaymentButtonModelsLinkViewModel';

import { ObservableAnnulApi } from "./ObservableAPI";
import { AnnulApiRequestFactory, AnnulApiResponseProcessor} from "../apis/AnnulApi";

export interface AnnulApiAnnulGetRequest {
    /**
     * Annul id
     * @type number
     * @memberof AnnulApiannulGet
     */
    id: number
}

export interface AnnulApiAnnulGetByClientIdRequest {
    /**
     * Client transaction id
     * @type string
     * @memberof AnnulApiannulGetByClientId
     */
    clientId: string
}

export interface AnnulApiAnnulSetRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetRequestModel
     * @memberof AnnulApiannulSet
     */
    model: PayPhonePaymentButtonModelsCancellationSetRequestModel
}

export interface AnnulApiAnnulSetByClientIdRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
     * @memberof AnnulApiannulSetByClientId
     */
    model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
}

export class ObjectAnnulApi {
    private api: ObservableAnnulApi

    public constructor(configuration: Configuration, requestFactory?: AnnulApiRequestFactory, responseProcessor?: AnnulApiResponseProcessor) {
        this.api = new ObservableAnnulApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * GET: the annul by his id
     * @param param the request object
     */
    public annulGetWithHttpInfo(param: AnnulApiAnnulGetRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        return this.api.annulGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * GET: the annul by his id
     * @param param the request object
     */
    public annulGet(param: AnnulApiAnnulGetRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        return this.api.annulGet(param.id,  options).toPromise();
    }

    /**
     * GET: the annul by client transaction id
     * @param param the request object
     */
    public annulGetByClientIdWithHttpInfo(param: AnnulApiAnnulGetByClientIdRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        return this.api.annulGetByClientIdWithHttpInfo(param.clientId,  options).toPromise();
    }

    /**
     * GET: the annul by client transaction id
     * @param param the request object
     */
    public annulGetByClientId(param: AnnulApiAnnulGetByClientIdRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        return this.api.annulGetByClientId(param.clientId,  options).toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param param the request object
     */
    public annulSetWithHttpInfo(param: AnnulApiAnnulSetRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        return this.api.annulSetWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param param the request object
     */
    public annulSet(param: AnnulApiAnnulSetRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        return this.api.annulSet(param.model,  options).toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param param the request object
     */
    public annulSetByClientIdWithHttpInfo(param: AnnulApiAnnulSetByClientIdRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        return this.api.annulSetByClientIdWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param param the request object
     */
    public annulSetByClientId(param: AnnulApiAnnulSetByClientIdRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        return this.api.annulSetByClientId(param.model,  options).toPromise();
    }

}

import { ObservableButtonApi } from "./ObservableAPI";
import { ButtonApiRequestFactory, ButtonApiResponseProcessor} from "../apis/ButtonApi";

export interface ButtonApiButtonConfirmV2Request {
    /**
     * 
     * @type PayPhonePaymentButtonModelsConfirmSaleRequestModel
     * @memberof ButtonApibuttonConfirmV2
     */
    model: PayPhonePaymentButtonModelsConfirmSaleRequestModel
}

export interface ButtonApiButtonPrepareRequest {
    /**
     * 
     * @type PayPhoneButtonBusinessModelsPrepareSaleRequestModel
     * @memberof ButtonApibuttonPrepare
     */
    model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel
}

export class ObjectButtonApi {
    private api: ObservableButtonApi

    public constructor(configuration: Configuration, requestFactory?: ButtonApiRequestFactory, responseProcessor?: ButtonApiResponseProcessor) {
        this.api = new ObservableButtonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param param the request object
     */
    public buttonConfirmV2WithHttpInfo(param: ButtonApiButtonConfirmV2Request, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModelB>> {
        return this.api.buttonConfirmV2WithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param param the request object
     */
    public buttonConfirmV2(param: ButtonApiButtonConfirmV2Request, options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleGetModelB> {
        return this.api.buttonConfirmV2(param.model,  options).toPromise();
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param param the request object
     */
    public buttonPrepareWithHttpInfo(param: ButtonApiButtonPrepareRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsPrepareSaleModel>> {
        return this.api.buttonPrepareWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param param the request object
     */
    public buttonPrepare(param: ButtonApiButtonPrepareRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsPrepareSaleModel> {
        return this.api.buttonPrepare(param.model,  options).toPromise();
    }

}

import { ObservableCancelApi } from "./ObservableAPI";
import { CancelApiRequestFactory, CancelApiResponseProcessor} from "../apis/CancelApi";

export interface CancelApiCancelSetRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetRequestModel
     * @memberof CancelApicancelSet
     */
    model: PayPhonePaymentButtonModelsCancellationSetRequestModel
}

export interface CancelApiCancelSetByClientRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
     * @memberof CancelApicancelSetByClient
     */
    model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
}

export class ObjectCancelApi {
    private api: ObservableCancelApi

    public constructor(configuration: Configuration, requestFactory?: CancelApiRequestFactory, responseProcessor?: CancelApiResponseProcessor) {
        this.api = new ObservableCancelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * POST: Request cancel transaction
     * @param param the request object
     */
    public cancelSetWithHttpInfo(param: CancelApiCancelSetRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cancelSetWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Request cancel transaction
     * @param param the request object
     */
    public cancelSet(param: CancelApiCancelSetRequest, options?: Configuration): Promise<boolean> {
        return this.api.cancelSet(param.model,  options).toPromise();
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param param the request object
     */
    public cancelSetByClientWithHttpInfo(param: CancelApiCancelSetByClientRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cancelSetByClientWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param param the request object
     */
    public cancelSetByClient(param: CancelApiCancelSetByClientRequest, options?: Configuration): Promise<boolean> {
        return this.api.cancelSetByClient(param.model,  options).toPromise();
    }

}

import { ObservableLinksApi } from "./ObservableAPI";
import { LinksApiRequestFactory, LinksApiResponseProcessor} from "../apis/LinksApi";

export interface LinksApiLinksPostRequest {
    /**
     * Parameters for request a new link
     * @type PayPhonePaymentButtonModelsLinkViewModel
     * @memberof LinksApilinksPost
     */
    model: PayPhonePaymentButtonModelsLinkViewModel
}

export class ObjectLinksApi {
    private api: ObservableLinksApi

    public constructor(configuration: Configuration, requestFactory?: LinksApiRequestFactory, responseProcessor?: LinksApiResponseProcessor) {
        this.api = new ObservableLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a pay link with specific amount
     * @param param the request object
     */
    public linksPostWithHttpInfo(param: LinksApiLinksPostRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.linksPostWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * Request a pay link with specific amount
     * @param param the request object
     */
    public linksPost(param: LinksApiLinksPostRequest, options?: Configuration): Promise<string> {
        return this.api.linksPost(param.model,  options).toPromise();
    }

}

import { ObservableRegionsApi } from "./ObservableAPI";
import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";

export interface RegionsApiRegionsGetRequest {
}

export class ObjectRegionsApi {
    private api: ObservableRegionsApi

    public constructor(configuration: Configuration, requestFactory?: RegionsApiRequestFactory, responseProcessor?: RegionsApiResponseProcessor) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * GET: available regions
     * @param param the request object
     */
    public regionsGetWithHttpInfo(param: RegionsApiRegionsGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PayPhoneButtonBusinessModelsRegionModel>>> {
        return this.api.regionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * GET: available regions
     * @param param the request object
     */
    public regionsGet(param: RegionsApiRegionsGetRequest = {}, options?: Configuration): Promise<Array<PayPhoneButtonBusinessModelsRegionModel>> {
        return this.api.regionsGet( options).toPromise();
    }

}

import { ObservableReverseApi } from "./ObservableAPI";
import { ReverseApiRequestFactory, ReverseApiResponseProcessor} from "../apis/ReverseApi";

export interface ReverseApiReverseSetRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetRequestModel
     * @memberof ReverseApireverseSet
     */
    model: PayPhonePaymentButtonModelsCancellationSetRequestModel
}

export interface ReverseApiReverseSetByClientIdRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     * @type PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
     * @memberof ReverseApireverseSetByClientId
     */
    model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel
}

export class ObjectReverseApi {
    private api: ObservableReverseApi

    public constructor(configuration: Configuration, requestFactory?: ReverseApiRequestFactory, responseProcessor?: ReverseApiResponseProcessor) {
        this.api = new ObservableReverseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * POST: Reverse transaction
     * @param param the request object
     */
    public reverseSetWithHttpInfo(param: ReverseApiReverseSetRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.reverseSetWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Reverse transaction
     * @param param the request object
     */
    public reverseSet(param: ReverseApiReverseSetRequest, options?: Configuration): Promise<boolean> {
        return this.api.reverseSet(param.model,  options).toPromise();
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param param the request object
     */
    public reverseSetByClientIdWithHttpInfo(param: ReverseApiReverseSetByClientIdRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.reverseSetByClientIdWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param param the request object
     */
    public reverseSetByClientId(param: ReverseApiReverseSetByClientIdRequest, options?: Configuration): Promise<boolean> {
        return this.api.reverseSetByClientId(param.model,  options).toPromise();
    }

}

import { ObservableSaleApi } from "./ObservableAPI";
import { SaleApiRequestFactory, SaleApiResponseProcessor} from "../apis/SaleApi";

export interface SaleApiSaleGetRequest {
    /**
     * Transaction identifier
     * @type number
     * @memberof SaleApisaleGet
     */
    id: number
}

export interface SaleApiSaleGetByClientRequest {
    /**
     * Client transaction id
     * @type string
     * @memberof SaleApisaleGetByClient
     */
    clientId: string
}

export interface SaleApiSaleSetRequest {
    /**
     * &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     * @type PayPhoneButtonBusinessViewModelsSaleRequestModel
     * @memberof SaleApisaleSet
     */
    model: PayPhoneButtonBusinessViewModelsSaleRequestModel
}

export class ObjectSaleApi {
    private api: ObservableSaleApi

    public constructor(configuration: Configuration, requestFactory?: SaleApiRequestFactory, responseProcessor?: SaleApiResponseProcessor) {
        this.api = new ObservableSaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get transaction by id
     * @param param the request object
     */
    public saleGetWithHttpInfo(param: SaleApiSaleGetRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModel>> {
        return this.api.saleGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get transaction by id
     * @param param the request object
     */
    public saleGet(param: SaleApiSaleGetRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleGetModel> {
        return this.api.saleGet(param.id,  options).toPromise();
    }

    /**
     * Get transaction by client transaction id
     * @param param the request object
     */
    public saleGetByClientWithHttpInfo(param: SaleApiSaleGetByClientRequest, options?: Configuration): Promise<HttpInfo<Array<PayPhoneButtonBusinessModelsSaleGetModel>>> {
        return this.api.saleGetByClientWithHttpInfo(param.clientId,  options).toPromise();
    }

    /**
     * Get transaction by client transaction id
     * @param param the request object
     */
    public saleGetByClient(param: SaleApiSaleGetByClientRequest, options?: Configuration): Promise<Array<PayPhoneButtonBusinessModelsSaleGetModel>> {
        return this.api.saleGetByClient(param.clientId,  options).toPromise();
    }

    /**
     * Create transaction and send notification to customer
     * @param param the request object
     */
    public saleSetWithHttpInfo(param: SaleApiSaleSetRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleModel>> {
        return this.api.saleSetWithHttpInfo(param.model,  options).toPromise();
    }

    /**
     * Create transaction and send notification to customer
     * @param param the request object
     */
    public saleSet(param: SaleApiSaleSetRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleModel> {
        return this.api.saleSet(param.model,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersCheckUserRequest {
    /**
     * Phone number
     * @type string
     * @memberof UsersApiusersCheckUser
     */
    number: string
    /**
     * Country code prefix
     * @type number
     * @memberof UsersApiusersCheckUser
     */
    prefix: number
}

export interface UsersApiUsersGetRequest {
    /**
     * Phone number
     * @type string
     * @memberof UsersApiusersGet
     */
    number: string
    /**
     * Country code prefix
     * @type number
     * @memberof UsersApiusersGet
     */
    prefix: number
}

export interface UsersApiUsersGetByNicknameRequest {
    /**
     * Nickname
     * @type string
     * @memberof UsersApiusersGetByNickname
     */
    number: string
    /**
     * Country phone prefix
     * @type number
     * @memberof UsersApiusersGetByNickname
     */
    prefix: number
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check active users
     * @param param the request object
     */
    public usersCheckUserWithHttpInfo(param: UsersApiUsersCheckUserRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.usersCheckUserWithHttpInfo(param.number, param.prefix,  options).toPromise();
    }

    /**
     * Check active users
     * @param param the request object
     */
    public usersCheckUser(param: UsersApiUsersCheckUserRequest, options?: Configuration): Promise<boolean> {
        return this.api.usersCheckUser(param.number, param.prefix,  options).toPromise();
    }

    /**
     * Get user by phone number
     * @param param the request object
     */
    public usersGetWithHttpInfo(param: UsersApiUsersGetRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        return this.api.usersGetWithHttpInfo(param.number, param.prefix,  options).toPromise();
    }

    /**
     * Get user by phone number
     * @param param the request object
     */
    public usersGet(param: UsersApiUsersGetRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsUserModel> {
        return this.api.usersGet(param.number, param.prefix,  options).toPromise();
    }

    /**
     * Get user by nickname
     * @param param the request object
     */
    public usersGetByNicknameWithHttpInfo(param: UsersApiUsersGetByNicknameRequest, options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        return this.api.usersGetByNicknameWithHttpInfo(param.number, param.prefix,  options).toPromise();
    }

    /**
     * Get user by nickname
     * @param param the request object
     */
    public usersGetByNickname(param: UsersApiUsersGetByNicknameRequest, options?: Configuration): Promise<PayPhoneButtonBusinessModelsUserModel> {
        return this.api.usersGetByNickname(param.number, param.prefix,  options).toPromise();
    }

}
