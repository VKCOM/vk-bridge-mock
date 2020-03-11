[npm-badge]: https://img.shields.io/npm/v/@vkontakte/vk-mini-apps-api.svg
[npm-link]: https://npmjs.com/package/@vkontakte/vk-mini-apps-api
[travis-badge]: https://travis-ci.org/VKCOM/vk-bridge-mock.svg?branch=master
[travis-link]: https://travis-ci.org/VKCOM/vk-bridge-mock

[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# VK Bridge Mock [![NPM][npm-badge]][npm-link] [![Travis][travis-badge]][travis-link]

This library mocks [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) methods.

## Usage

Use in your code instead of using [vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) by following way:

```javascript
import bridge from '@vkontakte/vk-bridge-mock';

// App init
bridge.send('VKWebAppInit');

bridge.send('VKWebAppGetUserInfo', {}).then(data => {
  // Do something
});
```

Or event-based way:

```javascript
import bridge from '@vkontakte/vk-bridge-mock';

// App init
bridge.send('VKWebAppInit');

bridge.subscribe(e => {
  if (e.detail.type === 'VKWebAppGetUserInfoResult') {
    // Do something
  }
});

bridge.send('VKWebAppGetUserInfo', {});
```

Please note that some methods may only receive (for example, `VKWebAppUpdateConfig`,
`VKWebAppViewHide`, `VKWebAppViewRestore`, etc.). To obtain data from them you need to use the event-based way and `callReceiveOnlyMethod()`

```javascript
import bridge, { callReceiveOnlyMethod } from '@vkontakte/vk-bridge-mock';

// App init
bridge.send('VKWebAppInit');

bridge.subscribe(e => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    // Do something
  }
});

// Use this function when you need to get data
callReceiveOnlyMethod('VKWebAppUpdateConfig');
```

For use without code bundler, include the file `dist/browser.min.js` and use as follows

```js
<script src="https://unpkg.com/@vkontakte/vk-bridge-mock/dist/browser.min.js"></script>

<script>
  // Sends event to client
  vkBridgeMock.send('VKWebAppInit');

  vkBridgeMock.subscribe(e => {
    if (e.detail.type === 'VKWebAppUpdateConfig') {
      // Do something
    }
  });

  // Use this function when you need to get data
  vkBridgeCallReceiveOnlyMethod('VKWebAppUpdateConfig');
</script>
```

More documentation regarding VK Bridge [is here](https://vk.com/dev/vk_apps_docs?f=4.%20%D0%9F%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20VK%20Connect).

## Using with [VK Mini Apps API](https://github.com/vkcom/vk-mini-apps-api)

You can also use this library in conjunction with VK Mini Apps API:

```javascript
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import bridgeMock from '@vkontakte/vk-bridge-mock';

// Creating API instance
const api = new VKMiniAppAPI(bridgeMock);

// Using methods
api.getUserInfo().then(userInfo => {
  // Do something with mock data of user info
});
```
