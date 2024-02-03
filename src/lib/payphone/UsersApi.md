# .UsersApi

All URIs are relative to *https://pay.payphonetodoesposible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCheckUser**](UsersApi.md#usersCheckUser) | **GET** /api/Users/check/{number}/region/{prefix} | Check active users
[**usersGet**](UsersApi.md#usersGet) | **GET** /api/Users/{number}/region/{prefix} | Get user by phone number
[**usersGetByNickname**](UsersApi.md#usersGetByNickname) | **GET** /api/Users/nickname/{number}/region/{prefix} | Get user by nickname


# **usersCheckUser**
> boolean usersCheckUser()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersCheckUserRequest = {
  // string | Phone number
  number: "number_example",
  // number | Country code prefix
  prefix: 1,
};

apiInstance.usersCheckUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | [**string**] | Phone number | defaults to undefined
 **prefix** | [**number**] | Country code prefix | defaults to undefined


### Return type

**boolean**

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

# **usersGet**
> PayPhoneButtonBusinessModelsUserModel usersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersGetRequest = {
  // string | Phone number
  number: "number_example",
  // number | Country code prefix
  prefix: 1,
};

apiInstance.usersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | [**string**] | Phone number | defaults to undefined
 **prefix** | [**number**] | Country code prefix | defaults to undefined


### Return type

**PayPhoneButtonBusinessModelsUserModel**

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

# **usersGetByNickname**
> PayPhoneButtonBusinessModelsUserModel usersGetByNickname()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersGetByNicknameRequest = {
  // string | Nickname
  number: "number_example",
  // number | Country phone prefix
  prefix: 1,
};

apiInstance.usersGetByNickname(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | [**string**] | Nickname | defaults to undefined
 **prefix** | [**number**] | Country phone prefix | defaults to undefined


### Return type

**PayPhoneButtonBusinessModelsUserModel**

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


