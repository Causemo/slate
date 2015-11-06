Web API
====================
All API endpoints for Web (server-to-server) integration. Only clients with `scope` containing `web` can access these API endpoints.

## Creative - Fetch
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: <AUTH_HEADER>" -d '{"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36","referralId":"", "user": {"gender":"female","dob":"1981","state":"MA"}}' "https://qa-api.causemo.com/web/creatives"
```

> Replace `AUTH_HEADER` with a `Basic` or `Bearer` token value. Referer to authenication docs

Fetch a creative
### [POST] web/creatives
### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
userAgent | true | String | The user agent string
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request

## Creative - Pledge 
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Basic <AUTH_HEADER>" -d '{"sessionId": "<SESSION_ID>", "email":"miguel-test@causemo.com", "amount": "5", "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' "https://qa.api.causemo.com/web/creatives/<CREATIVE_ID>/pledge"
```

> Replace `AUTH_HEADER` with a `Basic` or `Bearer` token value. Referer to authenication docs

> Replace `SESSION_ID` with a valid session ID from the fetch creative call

> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

Creates pledge to a specified creative 
### [POST] web/creatives/:creativeId/pledge
### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned in the fetch creative call
email | true | String | The user email address
amount | false | Integer | The amount donated
device | false | JSON | A JSON object representing a device associated with this request 
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request
sourceApp | false | String | String of the app which request is coming from

## Creative - Pledge Direct
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Basic <AUTH_HEADER>" -d '{"email":"miguel-test@causemo.com", "amount": "5", "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' "https://qa.api.causemo.com/web/creatives/<CREATIVE_ID>/pledge-direct"
```

> Replace `AUTH_HEADER` with a `Basic` or `Bearer` token value. Referer to authenication docs
 
> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

Same as creative pledge, except this endpoint does *not* require a session identifier
### [POST] web/creatives/:creativeId/pledge-direct
### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
email | true | String | The user email address
amount | false | Integer | The amount donated
device | false | JSON | A JSON object representing a device associated with this request 
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request
sourceApp | false | String | String of the app which request is coming from

## Creative - Donation
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: <AUTH_HEADER>" -d '{"sessionId": "<SESSION_ID>","email":"miguel-test@causemo.com", "amount": "10", "source": "My Web App", "user": {"firstName":"miguel", "lastName":"Doe"}}' "https://qa.api.causemo.com/web/creatives/<CREATIVE_ID>/donation/submit"
```

> Replace `AUTH_HEADER` with a `Basic` or `Bearer` token value. Referer to authenication docs

> Replace `SESSION_ID` with a valid session ID from the fetch creative call

> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

Make a donation to a creative
### [POST] web/creatives/:creativeId/donation/submit
### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned in the fetch creative call
amount | true | Integer | The amount donated
email | false | String | The user email address
sourceApp | false | String | String of the app which request is coming from
device | false | JSON | A JSON object representing a device associated with this request 
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request

