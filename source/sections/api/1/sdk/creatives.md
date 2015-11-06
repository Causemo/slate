[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / [SDK API](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/README.md) / Creatives
====================

###  sdk/creatives
  - **[GET]**
    - Fetches a creative from Causemo server
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - _none_ 
    - Params
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Response
      - A JSON object representing the `creative`. It will also return a `sessionId` passed in.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      ```
      curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" "http://dev-api.causemo.com/sdk/creatives?sessionId=<SESSION_ID>&udid=<UDID>"
      ```

###  sdk/creatives/:creativeId/started
  - **[POST]**
    - Notifies Causemo a creative was started
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/started"
      ```

###  sdk/creatives/:creativeId/suspended
  - **[POST]**
    - Notifies Causemo a creative was suspended
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
      - `playbackPosition`: The position playback was suspended at in seconds
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>", "playbackPosition": 12}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/suspended"
      ```

###  sdk/creatives/:creativeId/resumed
  - **[POST]**
    - Notifies Causemo a creative was resumed
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/resumed"
      ```

###  sdk/creatives/:creativeId/completed
  - **[POST]**
    - Notifies Causemo a creative was completed
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/completed"
      ```

###  sdk/creatives/:creativeId/activated
  - **[POST]**
    - Notifies Causemo a creative was activated
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/activated"
      ```

###  sdk/creatives/:creativeId/donation/viewed
  - **[POST]**
    - Notifies Causemo user was donation screen was viewed
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/donation/viewed"
      ```

###  sdk/creatives/:creativeId/donation/declined
  - **[POST]**
    - Notifies Causemo user was donation screen was declined
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/donation/declined"
      ```

###  sdk/creatives/:creativeId/donation
  - **[POST]**
    - Notifies Causemo user was donation screen was completed
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `appProductId`: The AppProduct for which the donation was made for
      - `sessionId`: The current session `creativeId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      - Replace `<APP_PRODUCT_ID>` with a valid `AppProduct.id`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>", "appProductId": "<APP_PRODUCT_ID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/donation"
      ```

###  sdk/creatives/:creativeId/donation/exited
  - **[POST]**
    - Notifies Causemo user was on the donation screen, it was completed and exited
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `email`: The user email for the donation 
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/donation/exited"
      ```

###  sdk/creatives/:creativeId/pledge
  - **[POST]**
    - Notifies Causemo user made a pledge
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `email`: The user email for pledge
      - `amount`: The amount the user pledged
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Params
      - _none_ 
    - Response
      - A JSON object with `sessionId` and `creativeId`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"sessionId": "<SESSION_ID>", "udid": "<UDID>", "email":"miguel@causemo.com", "amount": "5.25"}' "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/pledge"
      ```
  
###  sdk/creatives/:creativeId/share
  - **[GET]**
    - Fetches a creative share token
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - _none_ 
    - Params
      - `sessionId`: The current session `sessionId`
      - `udid`: The device `udid` used to initialize session with
    - Response
      - A JSON object with `sessionId`, `creativeId`, `token`.
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      - Replace `<SESSION_ID>` with `sessionId` from [session initilization call](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices)
      - Replace `<UDID>` with device `udid`
      - Replace `<CREATIVE_ID>` with a `creative.id` from a call to `sdk/creatives`
      ```
      curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" "http://dev-api.causemo.com/sdk/creatives/<CREATIVE_ID>/share?sessionId=<SESSION_ID>&udid=<UDID>"
      ```

