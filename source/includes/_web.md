Web API
====================
All API endpoints for Web (server-to-server) integration. Only clients with `scope` containing `web` can access these API endpoints.

## Cause Profiles - Fetch Profiles
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId":"<SESSION_ID>"}' https://qa-api.causemo.com/web/cause-profiles -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a id from session initialize

**PUBLIC** endpoint to fetch all cause profiles. Note, not all data is returned, but only what is needed to display a list of cause profiles.

### [GET] `web/cause-profiles`

### Param Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned from session init call

## Cause Profiles - Featured Profiles
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId":"<SESSION_ID>"}' https://qa-api.causemo.com/web/cause-profiles/featured -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a id from session initialize

**PUBLIC** endpoint to fetch featured cause profiles. This will also includes campaign data to display.

### [GET] `web/cause-profiles/featured`

### Param Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned from session init call

## Cause Profiles - Fetch Profile
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId":"<SESSION_ID>"}' https://qa-api.causemo.com/web/cause-profiles/<PROFILE_NAME> -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a id from session initialize

> Replace `PROFILE_NAME` with a cause profile name

**PUBLIC** endpoint to fetch cause profile and any active campaigns

### [GET] `web/cause-profiles/:profileName`

### Param Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned from session init call

## Cause Profiles - Fetch Creative
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId":"<SESSION_ID>"}' https://qa-api.causemo.com/web/cause-profiles/<PROFILE_NAME>/<CREATIVE_ID> -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a id from session initialize

> Replace `PROFILE_NAME` with a cause profile name

> Replace `CREATIVE_ID` with a creative id from a running campaign for this cause

**PUBLIC** endpoint to fetch creative and campaign information. If the creative is no longer active *but* the campaign is still active, it will return a different creative associated to the campaign. If the campaign is no longer active, it will return empty values.

### [GET] `web/cause-profiles/:profileName/:creativeId`

### Param Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned from session init call

## Cause Profiles - Token Creative 
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId":"<SESSION_ID>"}' https://qa-api.causemo.com/web/cause-profiles/<PROFILE_NAME>/token/<SESSION_TOKEN> -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a id from session initialize

> Replace `PROFILE_NAME` with a cause profile name

> Replace `SESSION_TOKEN` with a session token

**PUBLIC** endpoint to fetch creative and campaign information using a session token. This is similar to `Fetch Creative`, except it uses a token to load creative. Session tokens are used in emails or social shares. 

### [GET] `web/cause-profiles/:profileName/token/:sessionTokenId`

### Param Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
sessionId | true | String | The sessionId returned from session init call

## Creatives - Fetch
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -d '{"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36","referralId":"", "user": {"gender":"female","dob":"1981","state":"MA"}}' https://qa-api.causemo.com/web/creatives -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

**PUBLIC** endpoint to fetch a creative.

### [POST] `web/creatives`
### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
userAgent | true | String | The user agent string
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request

## Creatives - Pledge 
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId": "<SESSION_ID>", "email":"miguel-test@causemo.com", "amount": "5", "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' https://qa-api.causemo.com/web/creatives/<CREATIVE_ID>/pledge -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SESSION_ID` with a valid session ID from the fetch creative call

> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

**PUBLIC** endpoint which creates pledge to a specified creative.

### [POST] `web/creatives/:creativeId/pledge`
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

## Creatives - Pledge Direct
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -d '{"email":"miguel-test@causemo.com", "amount": "5", "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' https://qa-api.causemo.com/web/creatives/<CREATIVE_ID>/pledge-direct -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key
 
> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

**PUBLIC** endpoint, same as creative pledge, except this one does *not* require a session identifier.

### [POST] `web/creatives/:creativeId/pledge-direct`

### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
email | true | String | The user email address
amount | false | Integer | The amount donated
device | false | JSON | A JSON object representing a device associated with this request 
user | false | JSON | A JSON object representing a user associated with this request 
referralCode | false | String | A referral associated with the request
sourceApp | false | String | String of the app which request is coming from

## Creatives - Donation Submit
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -d '{"sessionId": "<SESSION_ID>","email":"miguel-test@causemo.com", "amount": "10", "source": "My Web App", "user": {"firstName":"miguel", "lastName":"Doe"}}' https://qa-api.causemo.com/web/creatives/<CREATIVE_ID>/donation/submit -u <PUBLIC_KEY>:<SECRET_KEY>
```

> Replace `PUBLIC_KEY` with your public key

> Replace `SECRET_KEY` with your secret key

> Replace `SESSION_ID` with a valid session ID from the fetch creative or session init call

> Replace `CREATIVE_ID` with a valid creative ID from the fetch creative call

**PRIVATE** endpoint to make a donation to a creative.

### [POST] `web/creatives/:creativeId/donation/submit`

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

## Session - Initialize
```shell
curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -d '{"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36", "previousSessionId": "", "referralCode": ""}' https://qa-api.causemo.com/web/sessions/initialize -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

**PUBLIC** endpoint to initialize a session. The sessionId returned should be used for all the subsequent calls made during this user session. 

### [POST] `web/sessions/initialize`

### Body Fields
Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
userAgent | true | String | The user agent string value
previousSessionId | false | String | The previous session id, if one is available
referralCode | false | String | A referral code associated with the request

