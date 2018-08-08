import GetUserInfo from './VKWebAppGetUserInfo';
import Init from './VKWebAppInit';
import GetAuthToken from './VKWebAppGetAuthToken';
import CallAPIMethod from './VKWebAppCallAPIMethod';
import GetGeodata from './VKWebAppGetGeodata';
import GetPhoneNumber from './VKWebAppGetPhoneNumber';
import GetClientVersion from './VKWebAppGetClientVersion';
import GetEmail from './VKWebAppGetEmail';

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
  // TODO UI
  VKWebAppShowWallPostBox: {},
  // TODO ???
  VKWebAppSetLocation: {},
  // TODO UI
  VKWebAppAllowMessagesFromGroup: {},
  // TODO UI
  VKWebAppJoinGroup: {},
};
