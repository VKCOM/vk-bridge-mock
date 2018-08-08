import { userData, userDataError } from './Data/VKWebAppGetUserInfo';
import { initData, initDataError } from './Data/VKWebAppInit';
import { authData, authDataError } from './Data/VKWebAppGetAuthToken';
import { apiDataError, apiData } from './Data/VKWebAppCallAPIMethod';
import { geoData, geoDataError } from './Data/VKWebAppGetGeodata';
import { phoneData, phoneDataError } from './Data/VKWebAppGetPhoneNumber';
import { clientData, clientDataError } from './Data/VKWebAppGetClientVersion';
import { emailData, emailDataError } from './Data/VKWebAppGetEmail';

const template = {
  mockedData: {},
  get data() {
    return this.mockedData;
  },
  set data(value) {
    this.mockedData = value;
    return this.mockedData;
  },

  mockedErrorData: {},
  get errorData() {
    return this.mockedErrorData;
  },
  set errorData(value) {
    this.mockedErrorData = value;
    return this.mockedErrorData;
  },
};

export default {
  // Data
  VKWebAppInit: {
    ...template,
    data: initData,
    error: initDataError
  },
  // Data
  VKWebAppGetAuthToken: {
    ...template,
    data: authData,
    error: authDataError
  },
  // Data
  VKWebAppCallAPIMethod: {
    ...template,
    data: apiData,
    error: apiDataError
  },
  // Data
  VKWebAppGetGeodata: {
    ...template,
    data: geoData,
    error: geoDataError
  },
  // Datab
  VKWebAppGetUserInfo: {
    ...template,
    data: userData,
    error: userDataError
  },
  // Data
  VKWebAppGetPhoneNumber: {
    ...template,
    data: phoneData,
    error: phoneDataError
  },
  // Data
  VKWebAppGetClientVersion: {
    ...template,
    data: clientData,
    error: clientDataError
  },
  // Data
  VKWebAppGetEmail: {
    ...template,
    data: emailData,
    error: emailDataError
  },
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
