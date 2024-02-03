# .SaleApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saleGet**](SaleApi.md#saleGet) | **GET** /api/Sale/{id} | Get transaction by id
[**saleGetByClient**](SaleApi.md#saleGetByClient) | **GET** /api/Sale/client/{clientId} | Get transaction by client transaction id
[**saleSet**](SaleApi.md#saleSet) | **POST** /api/Sale | Create transaction and send notification to customer


# **saleGet**
> PayPhoneButtonBusinessModelsSaleGetModel saleGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SaleApi(configuration);

let body:.SaleApiSaleGetRequest = {
  // number | Transaction identifier
  id: 1,
};

apiInstance.saleGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Transaction identifier | defaults to undefined


### Return type

**PayPhoneButtonBusinessModelsSaleGetModel**

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

# **saleGetByClient**
> Array<PayPhoneButtonBusinessModelsSaleGetModel> saleGetByClient()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SaleApi(configuration);

let body:.SaleApiSaleGetByClientRequest = {
  // string | Client transaction id
  clientId: "clientId_example",
};

apiInstance.saleGetByClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | Client transaction id | defaults to undefined


### Return type

**Array<PayPhoneButtonBusinessModelsSaleGetModel>**

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

# **saleSet**
> PayPhoneButtonBusinessModelsSaleModel saleSet(model)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SaleApi(configuration);

let body:.SaleApiSaleSetRequest = {
  // PayPhoneButtonBusinessViewModelsSaleRequestModel | <seealso cref=\"T:PayPhone.Button.Business.ViewModels.SaleRequestModel\" />
  model: {
    nickName: "nickName_example",
    chargeByNickName: true,
    phoneNumber: "phoneNumber_example",
    countryCode: "countryCode_example",
    timeZone: -12,
    lat: "lat_example",
    lng: "lng_example",
    clientUserId: "clientUserId_example",
    reference: "reference_example",
    optionalParameter1: "optionalParameter1_example",
    optionalParameter2: "optionalParameter2_example",
    optionalParameter3: "optionalParameter3_example",
    deferredType: "deferredType_example",
    responseUrl: "responseUrl_example",
    maxiDolar: true,
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

apiInstance.saleSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **PayPhoneButtonBusinessViewModelsSaleRequestModel**| &lt;seealso cref&#x3D;\&quot;T:PayPhone.Button.Business.ViewModels.SaleRequestModel\&quot; /&gt; |


### Return type

**PayPhoneButtonBusinessModelsSaleModel**

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


