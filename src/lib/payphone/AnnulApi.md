# .AnnulApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annulGet**](AnnulApi.md#annulGet) | **GET** /api/Annul/{id} | GET: the annul by his id
[**annulGetByClientId**](AnnulApi.md#annulGetByClientId) | **GET** /api/Annul/client/{clientId} | GET: the annul by client transaction id
[**annulSet**](AnnulApi.md#annulSet) | **POST** /api/Annul | POST: Request a cancellation for the transaction with specified id
[**annulSetByClientId**](AnnulApi.md#annulSetByClientId) | **POST** /api/Annul/client | POST: Request a cancellation for the transaction with specified client transaction id


# **annulGet**
> PayPhoneButtonBusinessModelsCancellationModel annulGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnulApi(configuration);

let body:.AnnulApiAnnulGetRequest = {
  // number | Annul id
  id: 1,
};

apiInstance.annulGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Annul id | defaults to undefined


### Return type

**PayPhoneButtonBusinessModelsCancellationModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **annulGetByClientId**
> PayPhoneButtonBusinessModelsCancellationModel annulGetByClientId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnulApi(configuration);

let body:.AnnulApiAnnulGetByClientIdRequest = {
  // string | Client transaction id
  clientId: "clientId_example",
};

apiInstance.annulGetByClientId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | Client transaction id | defaults to undefined


### Return type

**PayPhoneButtonBusinessModelsCancellationModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **annulSet**
> PayPhoneButtonBusinessModelsCancellationSetModel annulSet(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnulApi(configuration);

let body:.AnnulApiAnnulSetRequest = {
  // PayPhonePaymentButtonModelsCancellationSetRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\" />
  model: {
    id: 1,
  },
};

apiInstance.annulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsCancellationSetRequestModel**| &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt; |


### Return type

**PayPhoneButtonBusinessModelsCancellationSetModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **annulSetByClientId**
> PayPhoneButtonBusinessModelsCancellationSetModel annulSetByClientId(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnulApi(configuration);

let body:.AnnulApiAnnulSetByClientIdRequest = {
  // PayPhonePaymentButtonModelsCancellationSetByClientRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\" />
  model: {
    clientId: "clientId_example",
  },
};

apiInstance.annulSetByClientId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsCancellationSetByClientRequestModel**| &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt; |


### Return type

**PayPhoneButtonBusinessModelsCancellationSetModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


