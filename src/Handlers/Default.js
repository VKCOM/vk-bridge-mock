import { response as res } from '../index';
import VKWebAppEvent from '../VKWebAppEvent';

export default(eventName, hasError = false) => {
  return {
    postMessage: () => {
      if (!res[eventName].data) {
        throw Error(`${eventName} data is not mocked`);
      }
      if (!res[eventName].errorData) {
        throw Error(`${eventName} errorData is not mocked`);
      }
      VKWebAppEvent(!hasError ? res[eventName].data : res[eventName].errorData);
    }
  };
};
