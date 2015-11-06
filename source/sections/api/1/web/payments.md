[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / [Web API](https://github.com/Causemo/api-doc/blob/master/sections/api/1/web/README.md) / Payments
====================

###  web/payments/external/pledge-fulfill
  - **[POST]**
    - Notifies Causemo a user completed a pledge donation. This endpoint will create a session and only associate this event to it
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <PUBLIC_PRIVATE_KEY>`
    - Body
	  - `pledge`: The pledge token 
      - `email`: (optional) The user email for pledge
      - `amount`: The amount the user donated
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
      - A JSON object with `sessionId` and `creativeId` donation applied was to.
    - Try it:
      - Replace `<PUBLIC_PRIVATE_KEY>` with base64 encoded public and private key in this format `publicKey:privateKey`. Note the `:` seperating the public and private key.
	  - Replace `<PLEDGE>`` with a pledge token
      ```
      curl -X POST -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Basic <PUBLIC_PRIVATE_KEY>" -d '{"email":"miguel@causemo.com", "amount": "5.25", "pledge": "<PLEDGE>", "user": {"firstName":"miguel", "lastName":"Doe"}, "device": {"vendor":"Apple", "model":"iPhone", "osName": "iOS", "osVersion": "8.0", "type":"mobile"}}' "https://qa-api.causemo.com/web/payments/external/pledge-fulfill"
      ```
