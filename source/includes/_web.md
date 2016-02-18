Web API
====================
All API endpoints for Web integration. Only clients with `scope` containing `web` can access these API endpoints.

## Clients
Contains all endpoints related to the API clients.
### - Fetch Current Client
```shell
# Replace `PUBLIC_KEY` with your public key
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://qa-api.causemo.com/web/clients/me -u <PUBLIC_KEY>:
```
```javascript
var webAPI = require('causemo-api-client').webAPI; // get web API
var clientAPI = webAPI.client; // get Client endpoint 
return clientAPI.getMyClientInfo()
  .then(console.log.bind(undefined))
  .catch(console.error.bind(undefined));
```
Fetches the currently used client information

* **URL:** `/web/clients/me`
* **METHOD:** GET
* **TYPE:** public