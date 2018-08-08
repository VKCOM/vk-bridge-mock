import { authData, authDataError } from '../Data/VKWebAppGetAuthToken';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? authData : authDataError);
    }
  };
};
