# .ReverseApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reverseSet**](ReverseApi.md#reverseSet) | **POST** /api/Reverse | POST: Reverse transaction
[**reverseSetByClientId**](ReverseApi.md#reverseSetByClientId) | **POST** /api/Reverse/Client | POST: Reverse transaction by client transaction id


# **reverseSet**
> boolean reverseSet(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReverseApi(configuration);

let body:.ReverseApiReverseSetRequest = {
  // PayPhonePaymentButtonModelsCancellationSetRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetRequestModel\" />
  model: {
    id: 1,
  },
};

apiInstance.reverseSet(body).then((data:any) => {
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

# **reverseSetByClientId**
> boolean reverseSetByClientId(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReverseApi(configuration);

let body:.ReverseApiReverseSetByClientIdRequest = {
  // PayPhonePaymentButtonModelsCancellationSetByClientRequestModel | <seealso cref=\"T:PayPhone.PaymentButton.Models.CancellationSetByClientRequestModel\" />
  model: {
    clientId: "clientId_example",
  },
};

apiInstance.reverseSetByClientId(body).then((data:any) => {
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


