import { clientData, clientDataError } from '../Data/VKWebAppGetClientVersion';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? clientData : clientDataError);
    }
  };
};
