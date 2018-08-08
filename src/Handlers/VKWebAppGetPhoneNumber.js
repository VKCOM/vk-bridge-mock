import { phoneData, phoneDataError } from '../Data/VKWebAppGetPhoneNumber';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? phoneData : phoneDataError);
    }
  };
};
