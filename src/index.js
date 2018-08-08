import GetUserInfo from './Handlers/VKWebAppGetUserInfo';
import Init from './Handlers/VKWebAppInit';
import GetAuthToken from './Handlers/VKWebAppGetAuthToken';
import CallAPIMethod from './Handlers/VKWebAppCallAPIMethod';
import GetGeodata from './Handlers/VKWebAppGetGeodata';
import GetPhoneNumber from './Handlers/VKWebAppGetPhoneNumber';
import GetClientVersion from './Handlers/VKWebAppGetClientVersion';
import GetEmail from './Handlers/VKWebAppGetEmail';

export default {
  VKWebAppInit: Init(),
  // Data
  VKWebAppGetAuthToken: GetAuthToken(),
  // Data
  VKWebAppCallAPIMethod: CallAPIMethod(),
  // Data
  VKWebAppGetGeodata: GetGeodata(),
  // Datab
  VKWebAppGetUserInfo: GetUserInfo(),
  // Data
  VKWebAppGetPhoneNumber: GetPhoneNumber(),
  // Data
  VKWebAppGetClientVersion: GetClientVersion(),
  // Data
  VKWebAppGetEmail: GetEmail(),
  // TODO UI
  VKWebAppOpenPayForm: {},
  // TODO UI
  VKWebAppShare: {},
  // TODO UI
  VKWebAppAllowNotifications: {},
  // TODO UI
  VKWebAppDenyNotifications: {},
  // TODO ???
  VKWebAppViewUpdateNavigationState: {},
  // TODO ???
  VKWebAppSetTitle: {},
  // TODO UI
  VKWebAppShowWallPostBox: {},
  // TODO ???
  VKWebAppSetLocation: {},
  // TODO UI
  VKWebAppAllowMessagesFromGroup: {},
  // TODO UI
  VKWebAppJoinGroup: {},
};
