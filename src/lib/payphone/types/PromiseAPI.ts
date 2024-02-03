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
import { ObservableAnnulApi } from './ObservableAPI';

import { AnnulApiRequestFactory, AnnulApiResponseProcessor} from "../apis/AnnulApi";
export class PromiseAnnulApi {
    private api: ObservableAnnulApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnulApiRequestFactory,
        responseProcessor?: AnnulApiResponseProcessor
    ) {
        this.api = new ObservableAnnulApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * GET: the annul by his id
     * @param id Annul id
     */
    public annulGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        const result = this.api.annulGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * GET: the annul by his id
     * @param id Annul id
     */
    public annulGet(id: number, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        const result = this.api.annulGet(id, _options);
        return result.toPromise();
    }

    /**
     * GET: the annul by client transaction id
     * @param clientId Client transaction id
     */
    public annulGetByClientIdWithHttpInfo(clientId: string, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        const result = this.api.annulGetByClientIdWithHttpInfo(clientId, _options);
        return result.toPromise();
    }

    /**
     * GET: the annul by client transaction id
     * @param clientId Client transaction id
     */
    public annulGetByClientId(clientId: string, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationModel> {
        const result = this.api.annulGetByClientId(clientId, _options);
        return result.toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public annulSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        const result = this.api.annulSetWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public annulSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        const result = this.api.annulSet(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public annulSetByClientIdWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        const result = this.api.annulSetByClientIdWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public annulSetByClientId(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsCancellationSetModel> {
        const result = this.api.annulSetByClientId(model, _options);
        return result.toPromise();
    }


}



import { ObservableButtonApi } from './ObservableAPI';

import { ButtonApiRequestFactory, ButtonApiResponseProcessor} from "../apis/ButtonApi";
export class PromiseButtonApi {
    private api: ObservableButtonApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ButtonApiRequestFactory,
        responseProcessor?: ButtonApiResponseProcessor
    ) {
        this.api = new ObservableButtonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param model 
     */
    public buttonConfirmV2WithHttpInfo(model: PayPhonePaymentButtonModelsConfirmSaleRequestModel, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModelB>> {
        const result = this.api.buttonConfirmV2WithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param model 
     */
    public buttonConfirmV2(model: PayPhonePaymentButtonModelsConfirmSaleRequestModel, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleGetModelB> {
        const result = this.api.buttonConfirmV2(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param model 
     */
    public buttonPrepareWithHttpInfo(model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsPrepareSaleModel>> {
        const result = this.api.buttonPrepareWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param model 
     */
    public buttonPrepare(model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsPrepareSaleModel> {
        const result = this.api.buttonPrepare(model, _options);
        return result.toPromise();
    }


}



import { ObservableCancelApi } from './ObservableAPI';

import { CancelApiRequestFactory, CancelApiResponseProcessor} from "../apis/CancelApi";
export class PromiseCancelApi {
    private api: ObservableCancelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CancelApiRequestFactory,
        responseProcessor?: CancelApiResponseProcessor
    ) {
        this.api = new ObservableCancelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * POST: Request cancel transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public cancelSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.cancelSetWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request cancel transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public cancelSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<boolean> {
        const result = this.api.cancelSet(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public cancelSetByClientWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.cancelSetByClientWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public cancelSetByClient(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<boolean> {
        const result = this.api.cancelSetByClient(model, _options);
        return result.toPromise();
    }


}



import { ObservableLinksApi } from './ObservableAPI';

import { LinksApiRequestFactory, LinksApiResponseProcessor} from "../apis/LinksApi";
export class PromiseLinksApi {
    private api: ObservableLinksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LinksApiRequestFactory,
        responseProcessor?: LinksApiResponseProcessor
    ) {
        this.api = new ObservableLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a pay link with specific amount
     * @param model Parameters for request a new link
     */
    public linksPostWithHttpInfo(model: PayPhonePaymentButtonModelsLinkViewModel, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.linksPostWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * Request a pay link with specific amount
     * @param model Parameters for request a new link
     */
    public linksPost(model: PayPhonePaymentButtonModelsLinkViewModel, _options?: Configuration): Promise<string> {
        const result = this.api.linksPost(model, _options);
        return result.toPromise();
    }


}



import { ObservableRegionsApi } from './ObservableAPI';

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";
export class PromiseRegionsApi {
    private api: ObservableRegionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * GET: available regions
     */
    public regionsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<PayPhoneButtonBusinessModelsRegionModel>>> {
        const result = this.api.regionsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * GET: available regions
     */
    public regionsGet(_options?: Configuration): Promise<Array<PayPhoneButtonBusinessModelsRegionModel>> {
        const result = this.api.regionsGet(_options);
        return result.toPromise();
    }


}



import { ObservableReverseApi } from './ObservableAPI';

import { ReverseApiRequestFactory, ReverseApiResponseProcessor} from "../apis/ReverseApi";
export class PromiseReverseApi {
    private api: ObservableReverseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReverseApiRequestFactory,
        responseProcessor?: ReverseApiResponseProcessor
    ) {
        this.api = new ObservableReverseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * POST: Reverse transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public reverseSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.reverseSetWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Reverse transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public reverseSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Promise<boolean> {
        const result = this.api.reverseSet(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public reverseSetByClientIdWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.reverseSetByClientIdWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public reverseSetByClientId(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Promise<boolean> {
        const result = this.api.reverseSetByClientId(model, _options);
        return result.toPromise();
    }


}



import { ObservableSaleApi } from './ObservableAPI';

import { SaleApiRequestFactory, SaleApiResponseProcessor} from "../apis/SaleApi";
export class PromiseSaleApi {
    private api: ObservableSaleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SaleApiRequestFactory,
        responseProcessor?: SaleApiResponseProcessor
    ) {
        this.api = new ObservableSaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get transaction by id
     * @param id Transaction identifier
     */
    public saleGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModel>> {
        const result = this.api.saleGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get transaction by id
     * @param id Transaction identifier
     */
    public saleGet(id: number, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleGetModel> {
        const result = this.api.saleGet(id, _options);
        return result.toPromise();
    }

    /**
     * Get transaction by client transaction id
     * @param clientId Client transaction id
     */
    public saleGetByClientWithHttpInfo(clientId: string, _options?: Configuration): Promise<HttpInfo<Array<PayPhoneButtonBusinessModelsSaleGetModel>>> {
        const result = this.api.saleGetByClientWithHttpInfo(clientId, _options);
        return result.toPromise();
    }

    /**
     * Get transaction by client transaction id
     * @param clientId Client transaction id
     */
    public saleGetByClient(clientId: string, _options?: Configuration): Promise<Array<PayPhoneButtonBusinessModelsSaleGetModel>> {
        const result = this.api.saleGetByClient(clientId, _options);
        return result.toPromise();
    }

    /**
     * Create transaction and send notification to customer
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     */
    public saleSetWithHttpInfo(model: PayPhoneButtonBusinessViewModelsSaleRequestModel, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsSaleModel>> {
        const result = this.api.saleSetWithHttpInfo(model, _options);
        return result.toPromise();
    }

    /**
     * Create transaction and send notification to customer
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     */
    public saleSet(model: PayPhoneButtonBusinessViewModelsSaleRequestModel, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsSaleModel> {
        const result = this.api.saleSet(model, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check active users
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersCheckUserWithHttpInfo(number: string, prefix: number, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.usersCheckUserWithHttpInfo(number, prefix, _options);
        return result.toPromise();
    }

    /**
     * Check active users
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersCheckUser(number: string, prefix: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.usersCheckUser(number, prefix, _options);
        return result.toPromise();
    }

    /**
     * Get user by phone number
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersGetWithHttpInfo(number: string, prefix: number, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        const result = this.api.usersGetWithHttpInfo(number, prefix, _options);
        return result.toPromise();
    }

    /**
     * Get user by phone number
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersGet(number: string, prefix: number, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsUserModel> {
        const result = this.api.usersGet(number, prefix, _options);
        return result.toPromise();
    }

    /**
     * Get user by nickname
     * @param number Nickname
     * @param prefix Country phone prefix
     */
    public usersGetByNicknameWithHttpInfo(number: string, prefix: number, _options?: Configuration): Promise<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        const result = this.api.usersGetByNicknameWithHttpInfo(number, prefix, _options);
        return result.toPromise();
    }

    /**
     * Get user by nickname
     * @param number Nickname
     * @param prefix Country phone prefix
     */
    public usersGetByNickname(number: string, prefix: number, _options?: Configuration): Promise<PayPhoneButtonBusinessModelsUserModel> {
        const result = this.api.usersGetByNickname(number, prefix, _options);
        return result.toPromise();
    }


}



