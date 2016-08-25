
## Clients
Contains all endpoints related to the API Client.
### - Fetch Current Client
```shell
# Replace `PUBLIC_KEY` with your public key
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://dev-api.causemo.com/app/clients/me -u <PUBLIC_KEY>:
```
```javascript
var appAPI = require('causemo-api-client').appAPI; // get app API
var clientAPI = appAPI.client; // get Client endpoint 
return clientAPI.getMyClientInfo()
  .then(console.log.bind(undefined))
  .catch(console.error.bind(undefined));
```
Fetches the currently used client information

* **URL:** `/app/clients/me`
* **METHOD:** GET
* **TYPE:** public
