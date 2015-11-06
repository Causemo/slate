[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / [Web API](https://github.com/Causemo/api-doc/blob/master/sections/api/1/web/README.md) / Creatives
====================

###  web/creatives
  - **[POST]**
    - Fetches a creative from Causemo server
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
	  - `device`: A JSON object representing the device creative is being fetch for. It should contain a `platform` property which describes the device platform (ie: iPhone OS 8.0.2 or Windows 10, etc...). If the device is using a browser, it should also contain a property called `browser`.
      - `udid`: This is required if the `mobile` flag is not set or set to true; then device `udid` is the device unique identifier.
      - `user`: (optional) JSON object representing a user associated with this request 
    - Params
      - `mobile`: (optional) False if the request is not mobile native
    - Response
      - A JSON object representing the `creative`, `campaign` and `sessionId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Non-mobile:
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"device":{"platform": "Windows 10", "browser": "chrome"}}' "http://dev-api.causemo.com/web/creatives/?mobile=false"
      ```
      - Native mobile
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"udid": "12379","device":{"platform": "iPhone OS 8.0.2"}}' "http://dev-api.causemo.com/web/creatives"
      ```

###  web/creatives/:creativeId/started
  - **[POST]**
    - Notifies Causemo a creative was started
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/started"
      ```

###  web/creatives/:creativeId/suspended
  - **[POST]**
    - Notifies Causemo a creative was suspended
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/suspended"
      ```

###  web/creatives/:creativeId/resumed
  - **[POST]**
    - Notifies Causemo a creative was resumed
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/resumed"
      ```

###  web/creatives/:creativeId/completed
  - **[POST]**
    - Notifies Causemo a creative was completed
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/completed"
      ```

###  web/creatives/:creativeId/activated
  - **[POST]**
    - Notifies Causemo a creative was activated
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/activated"
      ```

###  web/creatives/:creativeId/donation/viewed
  - **[POST]**
    - Notifies Causemo user was donation screen was viewed
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/donation/viewed"
      ```

###  web/creatives/:creativeId/donation/declined
  - **[POST]**
    - Notifies Causemo user was donation screen was declined
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/donation/declined"
      ```

###  web/creatives/:creativeId/donation
  - **[POST]**
    - Notifies Causemo a user was donation screen was completed. This requires an appStoreId, if you do not have an appStoreId, you should call `web/creatives/:creativeId/donation/submit`.
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `appProductId`: The AppProduct for which the donation was made for
      - `sessionId`: The current session `creativeId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      - Replace `<APP_PRODUCT_ID>` with a valid `AppProduct.id`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "appProductId": "<APP_PRODUCT_ID>"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/donation"
      ```
	  
###  web/creatives/:creativeId/donation/submit
  - **[POST]**
    - Notifies Causemo user donation without an appStoreId
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session id
      - `amount`: The amount the user pledged
      - `email`: (optional) The user email address
	  - `sourceApp`: (optional) String of the app which request is coming from
	  - `device`: (optional) JSON object representing a device associated with this request 
      - `user`: (optional) JSON object representing a user associated with this request 
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<SESSION_ID>` with session
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>","email":"miguel-test3@a.com", "amount": "5.15", "source": "Candy Crush", "user": {"firstName":"miguel", "lastName":"Doe"}}' "http://localhost:3000/web/creatives/<CREATIVE_ID>/donation/submit"
      ```

###  web/creatives/:creativeId/donation/exited
  - **[POST]**
    - Notifies Causemo user was on the donation screen, it was completed and exited
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `email`: The user email for the donation 
      - `sessionId`: The current session `sessionId`
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "email":"miguel@causemo.com"}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/donation/exited"
      ```

###  web/creatives/:creativeId/pledge
  - **[POST]**
    - Notifies Causemo user made a pledge
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `email`: The user email for pledge
      - `amount`: The amount the user pledged
	  - `device`: (optional) JSON object representing a device associated with this request 
      - `user`: (optional) JSON object representing a user associated with this request 
      - `sessionId`: The current session id
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `web/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "email":"miguel@causemo.com", "amount": "5.25", "user": {"firstName":"miguel", "lastName":"Doe"}}' "http://dev-api.causemo.com/web/creatives/<CREATIVE_ID>/pledge"
      ```
      
###  web/creatives/:creativeId/pledge-direct
  - **[POST]**
    - Notifies Causemo user made a pledge. This endpoint will create a session and only associate this event to it
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <PUBLIC_PRIVATE_KEY>`
    - Body
      - `email`: The user email for pledge
      - `amount`: The amount the user pledged (0 or greater).
      - `device`: JSON object representing a device associated with this request 
          - `vendor`: The device vendor (ie: `Apple`) 
          - `model`: The device model (ie: `iPhone`) 
          - `osName`: The OS name (ie: `iOS`) 
          - `osVersion`: The OS version (ie: `8.0`) 
          - `type`: The type of device (ie: `mobile` vs `desktop`, `tablet`) 
      - `user`: (optional) JSON object representing a user associated with this request 
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<PUBLIC_PRIVATE_KEY>` with base64 encoded public and private key in this format `publicKey:privateKey`. Note the `:` seperating the public and private key.
      - Replace `<CREATIVE_ID>` with a valid creative id
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Basic <PUBLIC_PRIVATE_KEY>" -d '{"email":"miguel@causemo.com", "amount": "5.25", "user": {"firstName":"miguel", "lastName":"Doe"}, "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' "https://qa-api.causemo.com/web/creatives/<CREATIVE_ID>/pledge-direct"
      
