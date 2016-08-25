
## AdGroup
Contains all endpoints related to the API AdGroup.
### - Search
```shell
# Replace `PUBLIC_KEY` with your public key
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://dev-api.causemo.com/app/ad-groups?size=15 -u <PUBLIC_KEY>:
```
```javascript
var appAPI = require('causemo-api-client').appAPI; // get app API
var adGroupApi = appAPI.adGroup; // get Client endpoint 
var tableObj = {
    'displayLength': 15,
    'displayStart': 0,
    'sortDir': 'asc',
    'sortCol': 0,
    'columns': 'id,name,status',
    'echo': 1
};
var searchObj = {status: ['enabled'], search: 'test', causeId: 1234};
var authToken = ....;
return adGroupApi.search(authToken, tableObj, searchObj)
  .then(console.log.bind(undefined))
  .catch(console.error.bind(undefined));
```
Executes a search for AdGroup

* **URL:** `/app/ad-groups`
* **METHOD:** GET
* **TYPE:** public

#### QUERY:
Parameter | Required | Description
--------- | ------- | -----------
length | false | The search query limit (max 100)
start | false | The start page (default is 0)
sortDir | false | 'asc' or 'desc'
sortCol | false | The column name to sort by
query | false | String OR JSON String


