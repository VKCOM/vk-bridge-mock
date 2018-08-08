# About
This library mocks VK Connect methods from [vkui-connect](https://www.npmjs.com/package/@vkontakte/vkui-connect) for developing in desktop browser

# How to use
Add library to your project dependencies

`npm install @vkontakte/vkui-connect-mock`

or

`yarn add @vkontakte/vkui-connect-mock`

And then import necessary methods from this library instead of using [vkui-connect](https://www.npmjs.com/package/@vkontakte/vkui-connect):

``` javascript
import { VKWebAppInit, VKWebAppGetAuthToken } from '@vkontakte/vk-connect-mock';
```
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

