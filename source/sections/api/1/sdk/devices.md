[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / [SDK API](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/README.md) / Devices
====================

###  sdk/devices/
  - **[POST]**
    - Initializes a device session with Causemo API server. Every new device session should result into a call to this API endpoint.
    - Header fields
      - `api-version: 1`
      - `client-version: <SDK_VERSION>`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
      - `app`
        - `appStoreId`: The app store id of app running SDK 
      - `device`
        - `udid`: The device unique identifier
        - `platform`: The device platform name
        - `model`: The device name
    - Params
      - _none_ 
    - Response
      - A JSON object representing the `app`, containing its `appProduct` and its `trigger`. It will also return a `sessionId` needed for subsequent API calls for this session.
      - The `sessionId` should be held for the duration of the SDK session
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" -d '{"app": {"appStoreId":"test-publisher-1-app"}, "device": {"udid": "1234556", "platform": "iPhone OS 8.0.2", "model":"iPhone7,2"}}' "http://dev-api.causemo.com/sdk/devices/"
      ```
