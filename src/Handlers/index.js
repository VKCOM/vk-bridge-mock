import GetUserInfo from './VKWebAppGetUserInfo';
import Init from './VKWebAppInit';
import GetAuthToken from './VKWebAppGetAuthToken';
import CallAPIMethod from './VKWebAppCallAPIMethod';
import GetGeodata from './VKWebAppGetGeodata';
import GetPhoneNumber from './VKWebAppGetPhoneNumber';
import GetClientVersion from './VKWebAppGetClientVersion';
import GetEmail from './VKWebAppGetEmail';
import Default from './Default';

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
  VKWebAppOpenPayForm: Default('VKWebAppOpenPayForm'),
  // TODO UI
  VKWebAppShare: Default('VKWebAppShare'),
  // TODO UI
  VKWebAppAllowNotifications: Default('VKWebAppAllowNotifications'),
  // TODO UI
  VKWebAppDenyNotifications: Default('VKWebAppDenyNotifications'),
  // TODO UI
  VKWebAppShowWallPostBox: Default('VKWebAppShowWallPostBox'),
  // TODO ???
  VKWebAppSetLocation: Default('VKWebAppSetLocation'),
  // TODO UI
  VKWebAppAllowMessagesFromGroup: Default('VKWebAppAllowMessagesFromGroup'),
  // TODO UI
  VKWebAppJoinGroup: Default('VKWebAppJoinGroup')
};
