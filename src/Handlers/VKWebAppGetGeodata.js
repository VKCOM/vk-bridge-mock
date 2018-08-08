import { geoData, geoDataError } from '../Data/VKWebAppGetGeodata';
import VKWebAppEvent from '../VKWebAppEvent';

/* eslint no-unused-vars: "off" */
export default (hasError = false) => {
  return {
    postMessage: (params) => {
      VKWebAppEvent(!hasError ? geoData : geoDataError);
    }
  };
};
