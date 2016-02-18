API Requests
====================
The only format accepted by Causemo API service is JSON; JSON in and JSON out.
## Required Header Fields
Every API request to the Causemo must include the following header fields or it wil be rejected:

Parameter | Required | Description
--------- | ------- | -----------
api-version | true | API version to use
Authorization | true | The authorization to use. Read [Authentication](#authentication) for info. If using the `curl` command, it will add the header for you via the `-u` flag.

**NOTE:** The NodeJS API Client will automatically add these header fields.
