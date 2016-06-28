---
title: Causemo API Reference

language_tabs:
  - {javascript: NodeJS Client}
  - {shell: Shell}

toc_footers:
  - <a href='mailto:engineering@causemo.com?Subject=Documentation%20Question' target='_top'>Questions</a>
  - <a href='mailto:engineering@causemo.com?Subject=Sign%20Up%20for%20a%20Developer%20Key' target='_top'>Sign Up for a Developer Key</a>

includes:
  - authentication
  - requests
  - web
  - app
  - errors

search: true
---

Introduction
====================
This site contains documentation on how developers can integrate with Causemo API server. In order to use Causemo API, you must first receive API keys from Causemo. Send an email here to <a href='mailto:engineering@causemo.com?Subject=Sign%20Up%20for%20a%20Developer%20Key' target='_top'>engineering@causemo.com</a> to request a key.

We are constantly improving and adding to our documentations. So if you don't see answers to your questions, send us an email at <a href='mailto:engineering@causemo.com?Subject=Documentation%20Question' target='_top'>engineering@causemo.com</a>.

## NodeJS API Client
The NodeJS API client can be found on <a href="https://github.com/Causemo/causemo-api-client" target="_blank">github</a>. If you do not have access to the repository but feel that you should, please contact <a href='mailto:engineering@causemo.com?Subject=NodeJS%20API%20Client' target='_top'>engineering@causemo.com</a>

**Code snippets assumes the following:**

* **npm** installed
  * nconf
  * app-common
  * causemo-api-client
* **nconf** is setup with your environment variables
  * causemo_public_key
  * causemo_private_key
  * causemo_api_server

API Environments
====================
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://dev-api.causemo.com/status
```
We use one environment for testing and staging changes, located on `https://dev-api.causemo.com/` and our production environment is on `https://api.causemo.com/`. You will be given different keys which work on different environments. This document will reference only the QA environment. Once you are ready to go into production, you can replace the host to be our production host endpoint and use your production keys. To see the status of an environment, you can hit these endpoints:

* QA: `https://dev-api.causemo.com/status` 
* Production: `https://api.causemo.com/status` 
