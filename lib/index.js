(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vk-connect-mock'] = factory());
}(this, (function () { 'use strict';

  var userData = {
    type: 'VKWebAppGetUserInfoResult',
    data: {
      photo_100: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
      photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
      first_name: 'Karl Heinrich',
      last_name: 'Marx',
      sex: 0,
      city: {
        id: 1,
        title: 'Санкт-Петербург'
      },
      country: {
        id: 1,
        title: 'Россия'
      },
      timezone: 3
    }
  };

  var userDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* global window, CustomEvent */

  var VKWebAppEvent = (function (data) {
    var evt = new CustomEvent('VKWebAppEvent', {
      detail: data
    });
    window.dispatchEvent(evt);
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetUserInfo = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? userData : userDataError);
      }
    };
  });
  module.exports = exports['default'];

  var initData = {};

  var initDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var Init = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? initData : initDataError);
      }
    };
  });
  module.exports = exports['default'];

  var authData = {
    type: 'VKWebAppAccessTokenReceived',
    data: {
      access_token: '255f511f85047d79cf5aea962e4c5ade60fc89475874ab1efe4fd7552f44245c111850d6bedd6894027e5'
    }
  };

  var authDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var GetAuthToken = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? authData : authDataError);
      }
    };
  });
  module.exports = exports['default'];

  var apiData = {
    type: 'VKWebAppCallAPIMethodResult',
    data: {
      request_id: '324nnefj',
      response: [{
        id: 1,
        first_name: 'Pavel'
      }]
    }
  };

  var apiDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* global fetch */

  var stringifyParans = function stringifyParans(params) {
    var paramsKeys = Object.keys(params);
    return paramsKeys.length > 0 ? paramsKeys.map(function (key) {
      return key + '=' + params[key];
    }).join('&') : '';
  };

  var CallAPIMethod = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        fetch('/' + params.method + '?' + stringifyParans(params.params)).then(function (response) {
          return response.json();
        }).then(function (data) {
          return data.response;
        }).catch(function (err) {
          throw new Error(err);
        });
        VKWebAppEvent(!hasError ? apiData : apiDataError);
      }
    };
  });
  module.exports = exports['default'];

  var geoData = {
    type: 'VKWebAppGeodataResult',
    data: {
      available: true,
      lat: '59.9394909',
      long: '30.316382'
    }
  };

  var geoDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var GetGeodata = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? geoData : geoDataError);
      }
    };
  });
  module.exports = exports['default'];

  var phoneData = {
    type: 'VKWebAppGetPhoneNumberResult',
    data: {
      phone_number: '79991112233',
      is_verified: true
    }
  };

  var phoneDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var GetPhoneNumber = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? phoneData : phoneDataError);
      }
    };
  });
  module.exports = exports['default'];

  var clientData = {
    type: 'VKWebAppGetClientVersionResult',
    data: {
      platform: 'android',
      version: '5.3.2'
    }
  };

  var clientDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var GetClientVersion = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? clientData : clientDataError);
      }
    };
  });
  module.exports = exports['default'];

  var emailData = {
    type: 'VKWebAppGetEmailResult',
    data: {
      email: 'blablabla@gmail.com'
    }
  };

  var emailDataError = {
    type: 'VKWebAppGetEmailFailed',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

  /* eslint no-unused-vars: "off" */
  var GetEmail = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? emailData : emailDataError);
      }
    };
  });
  module.exports = exports['default'];

  var index = {
    VKWebAppInit: Init(),
    // Data
    VKWebAppGetAuthToken: GetAuthToken(),
    // Data
    VKWebAppCallAPIMethod: CallAPIMethod(),
    // Data
    VKWebAppGetGeodata: GetGeodata(),
    // Datab
    VKWebAppGetUserInfo: GetUserInfo(),
    // Data
    VKWebAppGetPhoneNumber: GetPhoneNumber(),
    // Data
    VKWebAppGetClientVersion: GetClientVersion(),
    // Data
    VKWebAppGetEmail: GetEmail(),
    // TODO UI
    VKWebAppOpenPayForm: {},
    // TODO UI
    VKWebAppShare: {},
    // TODO UI
    VKWebAppAllowNotifications: {},
    // TODO UI
    VKWebAppDenyNotifications: {},
    // TODO ???
    VKWebAppViewUpdateNavigationState: {},
    // TODO ???
    VKWebAppSetTitle: {},
    // TODO UI
    VKWebAppShowWallPostBox: {},
    // TODO ???
    VKWebAppSetLocation: {},
    // TODO UI
    VKWebAppAllowMessagesFromGroup: {},
    // TODO UI
    VKWebAppJoinGroup: {}
  };
  module.exports = exports['default'];

  return index;

})));
