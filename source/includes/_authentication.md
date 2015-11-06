# API Authentication
WORK IN PROGRESS

## Clients
Applications accessing/using Causemo API are consided 'clients' since they are consuming the provided API. Each client has a public and private key. The private key should **always** remain private. If a key is compromised, Causemo is able to disable access to the API for that particular key and generate another for the compromised client. 

A client also has a provided `scope` which limits a client access to a particular area in the Causemo API. Scopes are:

* `app`: Clients are limited to App API
* `sdk`: Clients are limited to SDK API
* `web`: Clients are limited to Web API


