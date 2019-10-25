/* global fetch */
import { response as res } from '../index';
import VKWebAppEvent from '../VKWebAppEvent';

const stringifyParans = (params) => {
  const paramsKeys = Object.keys(params);
  return paramsKeys.length > 0
    ? paramsKeys.map(key => `${key}=${params[key]}`).join('&')
    : '';
};

export default (hasError = false) => {
  return {
    postMessage: (params) => {
      fetch(`/${params.method}?${stringifyParans(params.params)}`)
        .then(response => response.json())
        .then(data => data.response)
        .catch((err) => {
          throw new Error(err);
        });
      VKWebAppEvent(!hasError ? res.VKWebAppCallAPIMethod.data : res.VKWebAppCallAPIMethod.errorData);
    }
  };
};
