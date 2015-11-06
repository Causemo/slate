[Main](https://github.com/Causemo/api-doc/blob/master/README.md) / SDK API
====================
All API endpoints for SDK. 

**IMPORTANT:** Every session needs to be initialized by posting to `/sdk/devices/`. This will then return you an object which contains a `sessionId`. This `sessionId`, along with the device `udid`, is needed for subsequent calls, chaining the calls together to a single session. When a new session is started on a device, another call to initialize should occour to receive a new sessionId.

- Client Scope
  - `sdk`
- [Session Initialization](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md#sdkdevices) 
- API 
  - [Devices](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/devices.md) Contains all actions and endpoints for a device; primarily used for session initialization. 
  - [Creatives](https://github.com/Causemo/api-doc/blob/master/sections/api/1/sdk/creatives.md) Contains all actions and endpoints for a creative.

