import { userData, userDataError } from './VKWebAppGetUserInfo';
import { initData, initDataError } from './VKWebAppInit';
import { authData, authDataError } from './VKWebAppGetAuthToken';
import { apiDataError, apiData } from './VKWebAppCallAPIMethod';
import { geoData, geoDataError } from './VKWebAppGetGeodata';
import { phoneData, phoneDataError } from './VKWebAppGetPhoneNumber';
import { clientData, clientDataError } from './VKWebAppGetClientVersion';
import { emailData, emailDataError } from './VKWebAppGetEmail';
import { allowMessagesFromGroupData, allowMessagesFromGroupDataError } from './VKWebAppAllowMessagesFromGroup';

class DataModel {
  constructor(data, errorData) {
    this.mockedData = data;
    this.mockedErrorData = errorData;
  }

  set data(data) {
    this.mockedData = data;
  }

  get data() {
    return this.mockedData;
  }

  set errorData(data) {
    this.mockedErrorData = data;
  }

  get errorData() {
    return this.mockedErrorData;
  }
}

export default {
  // Data
  VKWebAppInit: new DataModel(initData, initDataError),
  // Data
  VKWebAppGetAuthToken: new DataModel(authData, authDataError),
  // Data
  VKWebAppCallAPIMethod: new DataModel(apiData, apiDataError),
  // Data
  VKWebAppGetGeodata: new DataModel(geoData, geoDataError),
  // Data
  VKWebAppGetUserInfo: new DataModel(userData, userDataError),
  // Data
  VKWebAppGetPhoneNumber: new DataModel(phoneData, phoneDataError),
  // Data
  VKWebAppGetClientVersion: new DataModel(clientData, clientDataError),
  // Data
  VKWebAppGetEmail: new DataModel(emailData, emailDataError),
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
  // Data
  VKWebAppAllowMessagesFromGroup: new DataModel(allowMessagesFromGroupData, allowMessagesFromGroupDataError),
  // TODO UI
  VKWebAppJoinGroup: {},
};
