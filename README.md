# VK Connect Mock

<img width="100" height="100" src="https://avatars3.githubusercontent.com/u/1478241?s=200&v=4" align="right">

This library mocks [VK Connect](https://www.npmjs.com/package/@vkontakte/vk-connect) methods.

## Usage

Install the library via yarn

```
$ yarn add @vkontakte/vk-mini-apps-api
```

or npm

```
$ npm install @vkontakte/vk-mini-apps-api
```

Use in your code instead of using [vk-connect](https://www.npmjs.com/package/@vkontakte/vk-connect) by following way:

```javascript
import vkConnect from '@vkontakte/vk-connect-mock';

vkConnect.sendPromise('VKWebAppGetUserInfo', {}).then(data => {
  // Do something
});
```

Or event-based way:

```javascript
import vkConnect from '@vkontakte/vk-connect-mock';

vkConnect.subscribe(e => {
  if (e.detail.type === 'VKWebAppGetUserInfoResult') {
    // Do something
  }
});

vkConnect.send('VKWebAppGetUserInfo', {});
```

Please note that some methods may only receive (for example, `VKWebAppUpdateConfig`,
`VKWebAppViewHide`, `VKWebAppViewRestore`, etc.). To obtain data from them you need to use the following function:

```javascript
import vkConnect, { callReceiveOnlyMethod } from '@vkontakte/vk-connect-mock';

vkConnect.subscribe(e => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    // Do something
  }
});

// Use this function when you need to get data
callReceiveOnlyMethod('VKWebAppUpdateConfig');
```

More documentation regarding VK Connect [is here](https://vk.com/dev/vk_apps_docs?f=4.%20%D0%9F%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20VK%20Connect).

## Using with [VK Mini Apps API](https://github.com/vkcom/vk-mini-apps-api)

You can also use this library in conjunction with VK Mini Apps API:

```javascript
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import vkConnectMock from '@vkontakte/vk-connect-mock';

// Creating API instance
const api = new VKMiniAppAPI(vkConnectMock);

// Using methods
api.getUserInfo().then(userInfo => {
  // Do something with mock data of user info
});
```
