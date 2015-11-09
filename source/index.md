---
title: Causemo API Reference

language_tabs:
  - shell

toc_footers:
  - <a href='mailto:engineering@causemo.com?Subject=Documentation%20Question' target='_top'>Questions</a>
  - <a href='mailto:engineering@causemo.com?Subject=Sign%20Up%20for%20a%20Developer%20Key' target='_top'>Sign Up for a Developer Key</a>

includes:
  - authentication
  - requests
  - web
  - pixels
  - errors

search: true
---

Introduction
====================
This site contains documentation on how developers can integrate with Causemo API server. In order to use Causemo API, you must first receive API keys from Causemo. Send an email here to <a href='mailto:engineering@causemo.com?Subject=Sign%20Up%20for%20a%20Developer%20Key' target='_top'>engineering@causemo.com</a> to request a key.

We are constantly improving and adding to our documentations. So if you don't see answers to your questions, send us an email at <a href='mailto:engineering@causemo.com?Subject=Documentation%20Question' target='_top'>engineering@causemo.com</a>.

API Environments
====================
```shell
curl -X GET -H "Content-Type: application/json" -H "api-version: 1" https://qa-api.causemo.com/status
```
We use one environment for testing and staging changes, located on `https://qa-api.causemo.com/` and our production environment is on `https://api.causemo.com/`. You will be given different keys which work on different environments. This document will reference only the QA environment. Once you are ready to go into production, you can replace the host to be our production host endpoint and use your production keys. To see the status of an environment, you can hit these endpoints:

* QA: `https://qa-api.causemo.com/status` 
* Production: `https://api.causemo.com/status` 
