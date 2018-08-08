import { initData, initDataError } from '../Data/VKWebAppInit';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? initData : initDataError);
    }
  };
};
