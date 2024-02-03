# .LinksApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linksPost**](LinksApi.md#linksPost) | **POST** /api/Links | Request a pay link with specific amount


# **linksPost**
> string linksPost(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LinksApi(configuration);

let body:.LinksApiLinksPostRequest = {
  // PayPhonePaymentButtonModelsLinkViewModel | Parameters for request a new link
  model: {
    amount: 1,
    tax: 0,
    amountWithTax: 0,
    amountWithoutTax: 0,
    service: 0,
    tip: 0,
    currency: "currency_example",
    reference: "reference_example",
    clientTransactionId: "clientTransactionId_example",
    storeId: "storeId_example",
    additionalData: "additionalData_example",
    oneTime: true,
    expireIn: 1,
    isAmountEditable: true,
    isMassive: true,
  },
};

apiInstance.linksPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsLinkViewModel**| Parameters for request a new link |


### Return type

**string**

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


