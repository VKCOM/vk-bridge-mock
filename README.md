# About
This library mocks VK Connect methods from [vkui-connect](https://www.npmjs.com/package/@vkontakte/vkui-connect) for developing in desktop browser

# How to install
Add library to your project dependencies

`npm install @vkontakte/vkui-connect-mock`

or

`yarn add @vkontakte/vkui-connect-mock`

# How to use

Import necessary methods from this library instead of using [vkui-connect](https://www.npmjs.com/package/@vkontakte/vkui-connect):

``` javascript
import VKConnect from '@vkontakte/vkui-connect-mock';
```

And then init VK Connect:
``` javascript
VKConnect.subscribe((e) => {
  if (e.detail.type === 'VKWebAppGetUserInfoResult') {
    // do something
  }
});
VKConnect.send('VKWebAppGetUserInfo', {});
```
More documentation regarding VK Connect [is here](https://vk.com/dev/vk_apps_docs?f=4.%20%D0%9F%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20VK%20Connect).

# How to edit mocked data
There are getter and setter for mocked data of each method.
For example, you want to change response of `VKWebAppGetUserInfo` method:
``` javascript
import { response as res } from  '@vkontakte/vkui-connect-mock';
res.VKWebAppGetUserInfo.data = {
  type: 'VKWebAppGetUserInfoResult',
  data: {
    photo_100: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    first_name: 'Friedrich',
    last_name: 'Engels',
    sex: 0,
    city: {
      id: 1,
      title: 'London',
    },
    country: {
      id: 1,
      title: 'UK'
    },
    timezone: 0
  },
}
```
You can find more information about methods responses [here](https://vk.com/dev/vk_connect_events).

# Available Methods
- [x] VKWebAppInit
- [x] VKWebAppGetAuthToken
- [x] VKWebAppCallAPIMethod
- [x] VKWebAppGetGeodata
- [x] VKWebAppGetUserInfo
- [x] VKWebAppGetPhoneNumber
- [x] VKWebAppGetClientVersion
- [x] VKWebAppGetEmail

# WIP Methods
- [ ] VKWebAppOpenPayForm
- [ ] VKWebAppShare
- [ ] VKWebAppAllowNotifications
- [ ] VKWebAppDenyNotifications
- [ ] VKWebAppShowWallPostBox
- [ ] VKWebAppSetLocation
- [ ] VKWebAppAllowMessagesFromGroup
- [ ] VKWebAppJoinGroup

# Developer Mode
### Commands
- `npm run clean` - Remove `lib/` directory
- `npm run lint` - Run ESlint with airbnb-config
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

