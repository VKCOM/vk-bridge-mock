import { userData, userDataError } from '../Data/VKWebAppGetUserInfoResult';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? userData : userDataError);
    }
  };
};
