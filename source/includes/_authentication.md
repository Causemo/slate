# API Authentication
If your application uess the Causemo API to perform actions on behalf of a Causemo user, you must use our OAuth flow and the user must authenticate with Causemo first. For example, if you are asking users to authenticate using their Causmeo authentication credentials or if you are using our API endpoints which require a valid Causemo user identifier to perform the action (ie: activating a edit campaign). 

If your application is not referencing Causemo users directly, then you can use our Basic authentication flow. For exmaple, if you want to show a campaign in your application or if you are posting a pledge to Causemo for an email address. Those actions which do not need a Causemo user to be logged in are able to run in the Basic flow, since it only requires that you have valid client keys.

All clients are given `public` and `private` keys. The public keys can be passed around on UIs. Public keys maybe visible to end-users and for this reason only certain endpoints are accessible with only `public` keys. On the otherhand, `private` keys must always remain private and should always remain on your servers; never transmitted or packaged into the front end applications, as users might see it. You should never reveal what your private key is, otherwise, end-users can access `private` endpoints on your behalf. If you feel that your keys have been compramised, please contact Causemo to reset your keys.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## Clients
Applications accessing/using Causemo API are consided 'clients' since they are consuming the provided API. Each client has a public and private key. The private key should **always** remain private. If a key is compromised, Causemo is able to disable access to the API for that particular key and generate another for the compromised client. 

A client also has a provided `scope` which limits a client access to a particular area in the Causemo API. Scopes are:

* `app`: Clients are limited to App API
* `sdk`: Clients are limited to SDK API
* `web`: Clients are limited to Web API

## Basic Flow
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://qa-api.causemo.com/web/clients/me -u <PUBLIC_KEY>:
```

> Replace `PUBLIC_KEY` with your public key

Authentication to the API is performed via HTTP Basic Auth. For `public` endpoints, provide your `public` API key as the basic auth username value and no password. Remember to still include the trailing `:`, this will use empty password, otherwise you will be prompted for a password. 

For `private` endpoints, provide both your `public` API key as the basic auth username value and `private` key as the basic auth password. This API document will flag an enpointd as `public` or `private`. 

## OAuth Flow
working on it...
