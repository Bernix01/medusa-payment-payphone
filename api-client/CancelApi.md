# .CancelApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSet**](CancelApi.md#cancelSet) | **POST** /api/Cancel | POST: Request cancel transaction
[**cancelSetByClient**](CancelApi.md#cancelSetByClient) | **POST** /api/Cancel/client | POST: Request cancel transaction by client transaction id


# **cancelSet**
> boolean cancelSet(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CancelApi(configuration);

let body:.CancelApiCancelSetRequest = {
  // PayPhonePaymentButtonModelsCancellationSetRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\" />
  model: {
    id: 1,
  },
};

apiInstance.cancelSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsCancellationSetRequestModel**| &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\&quot; /&gt; |


### Return type

**boolean**

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

# **cancelSetByClient**
> boolean cancelSetByClient(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CancelApi(configuration);

let body:.CancelApiCancelSetByClientRequest = {
  // PayPhonePaymentButtonModelsCancellationSetByClientRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\" />
  model: {
    clientId: "clientId_example",
  },
};

apiInstance.cancelSetByClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsCancellationSetByClientRequestModel**| &lt;seealso cref&#x3D;\&quot;T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\&quot; /&gt; |


### Return type

**boolean**

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


