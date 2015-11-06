[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / [Web API](https://github.com/Causemo/api-doc/blob/master/sections/api/1/web/README.md) / Triggers
====================

###  web/triggers
  - **[GET]**
    - Fetches all the triggers for the application
    - Header fields
      - `api-version: 1`
      - `Authorization: Bearer <AUTH_TOKEN>`
    - Body
	  - _none_
    - Params
      - _none_
    - Response
      - A JSON object with the trigger type as a key and with an object containing the product and trigger information
    - Try it:
      - Replace `<AUTH_TOKEN>` with authenticated token provided
      ```
	  curl -X GET -H "Content-Type: application/json" -H "api-version: 1" -H "Authorization: Bearer <AUTH_TOKEN>" "http://localhost:3000/web/triggers"
      ```
