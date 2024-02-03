# .ButtonApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buttonConfirmV2**](ButtonApi.md#buttonConfirmV2) | **POST** /api/button/V2/Confirm | Post: Confirm the transaction receive from payment button
[**buttonPrepare**](ButtonApi.md#buttonPrepare) | **POST** /api/button/Prepare | POST: Prepare the transaction for consume later by payment button


# **buttonConfirmV2**
> PayPhoneButtonBusinessModelsSaleGetModelB buttonConfirmV2(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ButtonApi(configuration);

let body:.ButtonApiButtonConfirmV2Request = {
  // PayPhonePaymentButtonModelsConfirmSaleRequestModel
  model: {
    id: 1,
    clientTxId: "clientTxId_example",
  },
};

apiInstance.buttonConfirmV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhonePaymentButtonModelsConfirmSaleRequestModel**|  |


### Return type

**PayPhoneButtonBusinessModelsSaleGetModelB**

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

# **buttonPrepare**
> PayPhoneButtonBusinessModelsPrepareSaleModel buttonPrepare(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ButtonApi(configuration);

let body:.ButtonApiButtonPrepareRequest = {
  // PayPhoneButtonBusinessModelsPrepareSaleRequestModel
  model: {
    responseUrl: "responseUrl_example",
    transactionSummaryUrl: "transactionSummaryUrl_example",
    timeZone: -12,
    lat: "lat_example",
    lng: "lng_example",
    lang: "lang_example",
    reference: "reference_example",
    phoneNumber: "phoneNumber_example",
    email: "email_example",
    optionalParameter: "optionalParameter_example",
    documentId: "documentId_example",
    cancellationUrl: "cancellationUrl_example",
    amount: 1,
    amountWithTax: 0,
    amountWithoutTax: 0,
    manualTax: true,
    tax: 0,
    service: 0,
    tip: 0,
    clientTransactionId: "clientTransactionId_example",
    storeId: "storeId_example",
    terminalId: "terminalId_example",
    currency: "currency_example",
    order: {
      billTo: {
        billToId: 1,
        address1: "address1_example",
        address2: "address2_example",
        country: "country_example",
        state: "state_example",
        locality: "locality_example",
        firstName: "firstName_example",
        lastName: "lastName_example",
        phoneNumber: "phoneNumber_example",
        email: "email_example",
        postalCode: "postalCode_example",
        customerId: "customerId_example",
        ipAddress: "ipAddress_example",
      },
      lineItems: [
        {
          productName: "productName_example",
          unitPrice: 1,
          quantity: 1,
          totalAmount: 1,
          taxAmount: 1,
          productSKU: "productSKU_example",
          productDescription: "productDescription_example",
          shippingDestinationTypes: "shippingDestinationTypes_example",
          passenger: {
            type: "type_example",
            status: "status_example",
            phone: "phone_example",
            firstName: "firstName_example",
            lastName: "lastName_example",
            id: "id_example",
            email: "email_example",
            nationality: "nationality_example",
          },
        },
      ],
    },
  },
};

apiInstance.buttonPrepare(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhoneButtonBusinessModelsPrepareSaleRequestModel**|  |


### Return type

**PayPhoneButtonBusinessModelsPrepareSaleModel**

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


