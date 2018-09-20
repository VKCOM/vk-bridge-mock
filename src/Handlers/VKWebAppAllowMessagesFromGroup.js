import { response as res } from '../index';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? res.VKWebAppAllowMessagesFromGroup.data : res.VKWebAppAllowMessagesFromGroup.errorData);
    }
  };
};
