import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AnnulApiRequestFactory, AnnulApiResponseProcessor} from "../apis/AnnulApi";
export class ObservableAnnulApi {
    private requestFactory: AnnulApiRequestFactory;
    private responseProcessor: AnnulApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnulApiRequestFactory,
        responseProcessor?: AnnulApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnnulApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnnulApiResponseProcessor();
    }

    /**
     * GET: the annul by his id
     * @param id Annul id
     */
    public annulGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        const requestContextPromise = this.requestFactory.annulGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.annulGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * GET: the annul by his id
     * @param id Annul id
     */
    public annulGet(id: number, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsCancellationModel> {
        return this.annulGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>) => apiResponse.data));
    }

    /**
     * GET: the annul by client transaction id
     * @param clientId Client transaction id
     */
    public annulGetByClientIdWithHttpInfo(clientId: string, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>> {
        const requestContextPromise = this.requestFactory.annulGetByClientId(clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.annulGetByClientIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * GET: the annul by client transaction id
     * @param clientId Client transaction id
     */
    public annulGetByClientId(clientId: string, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsCancellationModel> {
        return this.annulGetByClientIdWithHttpInfo(clientId, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsCancellationModel>) => apiResponse.data));
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public annulSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        const requestContextPromise = this.requestFactory.annulSet(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.annulSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Request a cancellation for the transaction with specified id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public annulSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsCancellationSetModel> {
        return this.annulSetWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>) => apiResponse.data));
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public annulSetByClientIdWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>> {
        const requestContextPromise = this.requestFactory.annulSetByClientId(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.annulSetByClientIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Request a cancellation for the transaction with specified client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public annulSetByClientId(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsCancellationSetModel> {
        return this.annulSetByClientIdWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsCancellationSetModel>) => apiResponse.data));
    }

}

import { ButtonApiRequestFactory, ButtonApiResponseProcessor} from "../apis/ButtonApi";
export class ObservableButtonApi {
    private requestFactory: ButtonApiRequestFactory;
    private responseProcessor: ButtonApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ButtonApiRequestFactory,
        responseProcessor?: ButtonApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ButtonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ButtonApiResponseProcessor();
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param model 
     */
    public buttonConfirmV2WithHttpInfo(model: PayPhonePaymentButtonModelsConfirmSaleRequestModel, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModelB>> {
        const requestContextPromise = this.requestFactory.buttonConfirmV2(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buttonConfirmV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Post: Confirm the transaction receive from payment button
     * @param model 
     */
    public buttonConfirmV2(model: PayPhonePaymentButtonModelsConfirmSaleRequestModel, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsSaleGetModelB> {
        return this.buttonConfirmV2WithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsSaleGetModelB>) => apiResponse.data));
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param model 
     */
    public buttonPrepareWithHttpInfo(model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsPrepareSaleModel>> {
        const requestContextPromise = this.requestFactory.buttonPrepare(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buttonPrepareWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Prepare the transaction for consume later by payment button
     * @param model 
     */
    public buttonPrepare(model: PayPhoneButtonBusinessModelsPrepareSaleRequestModel, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsPrepareSaleModel> {
        return this.buttonPrepareWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsPrepareSaleModel>) => apiResponse.data));
    }

}

import { CancelApiRequestFactory, CancelApiResponseProcessor} from "../apis/CancelApi";
export class ObservableCancelApi {
    private requestFactory: CancelApiRequestFactory;
    private responseProcessor: CancelApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CancelApiRequestFactory,
        responseProcessor?: CancelApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CancelApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CancelApiResponseProcessor();
    }

    /**
     * POST: Request cancel transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public cancelSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.cancelSet(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Request cancel transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public cancelSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<boolean> {
        return this.cancelSetWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public cancelSetByClientWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.cancelSetByClient(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSetByClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Request cancel transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public cancelSetByClient(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<boolean> {
        return this.cancelSetByClientWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}

import { LinksApiRequestFactory, LinksApiResponseProcessor} from "../apis/LinksApi";
export class ObservableLinksApi {
    private requestFactory: LinksApiRequestFactory;
    private responseProcessor: LinksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LinksApiRequestFactory,
        responseProcessor?: LinksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LinksApiResponseProcessor();
    }

    /**
     * Request a pay link with specific amount
     * @param model Parameters for request a new link
     */
    public linksPostWithHttpInfo(model: PayPhonePaymentButtonModelsLinkViewModel, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.linksPost(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linksPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Request a pay link with specific amount
     * @param model Parameters for request a new link
     */
    public linksPost(model: PayPhonePaymentButtonModelsLinkViewModel, _options?: Configuration): Observable<string> {
        return this.linksPostWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";
export class ObservableRegionsApi {
    private requestFactory: RegionsApiRequestFactory;
    private responseProcessor: RegionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegionsApiResponseProcessor();
    }

    /**
     * GET: available regions
     */
    public regionsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<PayPhoneButtonBusinessModelsRegionModel>>> {
        const requestContextPromise = this.requestFactory.regionsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * GET: available regions
     */
    public regionsGet(_options?: Configuration): Observable<Array<PayPhoneButtonBusinessModelsRegionModel>> {
        return this.regionsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<PayPhoneButtonBusinessModelsRegionModel>>) => apiResponse.data));
    }

}

import { ReverseApiRequestFactory, ReverseApiResponseProcessor} from "../apis/ReverseApi";
export class ObservableReverseApi {
    private requestFactory: ReverseApiRequestFactory;
    private responseProcessor: ReverseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReverseApiRequestFactory,
        responseProcessor?: ReverseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReverseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReverseApiResponseProcessor();
    }

    /**
     * POST: Reverse transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public reverseSetWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.reverseSet(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reverseSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Reverse transaction
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt;
     */
    public reverseSet(model: PayPhonePaymentButtonModelsCancellationSetRequestModel, _options?: Configuration): Observable<boolean> {
        return this.reverseSetWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public reverseSetByClientIdWithHttpInfo(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.reverseSetByClientId(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reverseSetByClientIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * POST: Reverse transaction by client transaction id
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt;
     */
    public reverseSetByClientId(model: PayPhonePaymentButtonModelsCancellationSetByClientRequestModel, _options?: Configuration): Observable<boolean> {
        return this.reverseSetByClientIdWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}

import { SaleApiRequestFactory, SaleApiResponseProcessor} from "../apis/SaleApi";
export class ObservableSaleApi {
    private requestFactory: SaleApiRequestFactory;
    private responseProcessor: SaleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SaleApiRequestFactory,
        responseProcessor?: SaleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SaleApiResponseProcessor();
    }

    /**
     * Get transaction by id
     * @param id Transaction identifier
     */
    public saleGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsSaleGetModel>> {
        const requestContextPromise = this.requestFactory.saleGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saleGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transaction by id
     * @param id Transaction identifier
     */
    public saleGet(id: number, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsSaleGetModel> {
        return this.saleGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsSaleGetModel>) => apiResponse.data));
    }

    /**
     * Get transaction by client transaction id
     * @param clientId Client transaction id
     */
    public saleGetByClientWithHttpInfo(clientId: string, _options?: Configuration): Observable<HttpInfo<Array<PayPhoneButtonBusinessModelsSaleGetModel>>> {
        const requestContextPromise = this.requestFactory.saleGetByClient(clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saleGetByClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transaction by client transaction id
     * @param clientId Client transaction id
     */
    public saleGetByClient(clientId: string, _options?: Configuration): Observable<Array<PayPhoneButtonBusinessModelsSaleGetModel>> {
        return this.saleGetByClientWithHttpInfo(clientId, _options).pipe(map((apiResponse: HttpInfo<Array<PayPhoneButtonBusinessModelsSaleGetModel>>) => apiResponse.data));
    }

    /**
     * Create transaction and send notification to customer
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     */
    public saleSetWithHttpInfo(model: PayPhoneButtonBusinessViewModelsSaleRequestModel, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsSaleModel>> {
        const requestContextPromise = this.requestFactory.saleSet(model, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saleSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create transaction and send notification to customer
     * @param model &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt;
     */
    public saleSet(model: PayPhoneButtonBusinessViewModelsSaleRequestModel, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsSaleModel> {
        return this.saleSetWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsSaleModel>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Check active users
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersCheckUserWithHttpInfo(number: string, prefix: number, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.usersCheckUser(number, prefix, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersCheckUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check active users
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersCheckUser(number: string, prefix: number, _options?: Configuration): Observable<boolean> {
        return this.usersCheckUserWithHttpInfo(number, prefix, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * Get user by phone number
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersGetWithHttpInfo(number: string, prefix: number, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        const requestContextPromise = this.requestFactory.usersGet(number, prefix, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user by phone number
     * @param number Phone number
     * @param prefix Country code prefix
     */
    public usersGet(number: string, prefix: number, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsUserModel> {
        return this.usersGetWithHttpInfo(number, prefix, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsUserModel>) => apiResponse.data));
    }

    /**
     * Get user by nickname
     * @param number Nickname
     * @param prefix Country phone prefix
     */
    public usersGetByNicknameWithHttpInfo(number: string, prefix: number, _options?: Configuration): Observable<HttpInfo<PayPhoneButtonBusinessModelsUserModel>> {
        const requestContextPromise = this.requestFactory.usersGetByNickname(number, prefix, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersGetByNicknameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user by nickname
     * @param number Nickname
     * @param prefix Country phone prefix
     */
    public usersGetByNickname(number: string, prefix: number, _options?: Configuration): Observable<PayPhoneButtonBusinessModelsUserModel> {
        return this.usersGetByNicknameWithHttpInfo(number, prefix, _options).pipe(map((apiResponse: HttpInfo<PayPhoneButtonBusinessModelsUserModel>) => apiResponse.data));
    }

}
