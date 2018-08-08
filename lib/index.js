(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['vk-connect-mock'] = {})));
}(this, (function (exports) { 'use strict';

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
        VKWebAppEvent(!hasError ? response.VKWebAppGetUserInfo.data : response.VKWebAppGetUserInfo.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var Init = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppInit.data : response.VKWebAppInit.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetAuthToken = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppGetAuthToken.data : response.VKWebAppGetAuthToken.errorData);
      }
    };
  });
  module.exports = exports['default'];

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
        fetch('/' + params.method + '?' + stringifyParans(params.params)).then(function (response$$1) {
          return response$$1.json();
        }).then(function (data) {
          return data.response;
        }).catch(function (err) {
          throw new Error(err);
        });
        VKWebAppEvent(!hasError ? response.VKWebAppCallAPIMethod.data : response.VKWebAppCallAPIMethod.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetGeodata = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppGetGeodata.data : response.VKWebAppGetGeodata.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetPhoneNumber = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppGetPhoneNumber.data : response.VKWebAppGetPhoneNumber.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetClientVersion = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppGetClientVersion.data : response.VKWebAppGetClientVersion.errorData);
      }
    };
  });
  module.exports = exports['default'];

  /* eslint no-unused-vars: "off" */
  var GetEmail = (function () {
    var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      postMessage: function postMessage(params) {
        VKWebAppEvent(!hasError ? response.VKWebAppGetEmail.data : response.VKWebAppGetEmail.errorData);
      }
    };
  });
  module.exports = exports['default'];

  var messageHandlers = {
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

  var subscribers = [];
  module.exports = exports["default"];

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

  var initData = {};

  var initDataError = {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: []
    }
  };

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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var template = {
    mockedData: {},
    get data() {
      return this.mockedData;
    },
    set data(value) {
      this.mockedData = value;
      return this.mockedData;
    },

    mockedErrorData: {},
    get errorData() {
      return this.mockedErrorData;
    },
    set errorData(value) {
      this.mockedErrorData = value;
      return this.mockedErrorData;
    }
  };

  var dataMocks = {
    // Data
    VKWebAppInit: _extends({}, template, {
      data: initData,
      error: initDataError
    }),
    // Data
    VKWebAppGetAuthToken: _extends({}, template, {
      data: authData,
      error: authDataError
    }),
    // Data
    VKWebAppCallAPIMethod: _extends({}, template, {
      data: apiData,
      error: apiDataError
    }),
    // Data
    VKWebAppGetGeodata: _extends({}, template, {
      data: geoData,
      error: geoDataError
    }),
    // Datab
    VKWebAppGetUserInfo: _extends({}, template, {
      data: userData,
      error: userDataError
    }),
    // Data
    VKWebAppGetPhoneNumber: _extends({}, template, {
      data: phoneData,
      error: phoneDataError
    }),
    // Data
    VKWebAppGetClientVersion: _extends({}, template, {
      data: clientData,
      error: clientDataError
    }),
    // Data
    VKWebAppGetEmail: _extends({}, template, {
      data: emailData,
      error: emailDataError
    }),
    // TODO UI
    VKWebAppOpenPayForm: {},
    // TODO UI
    VKWebAppShare: {},
    // TODO UI
    VKWebAppAllowNotifications: {},
    // TODO UI
    VKWebAppDenyNotifications: {},
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

  /* global window, document */
  /* eslint no-param-reassign: "off" */
  if (!window.CustomEvent) {
    (function () {
      var CustomEvent = function CustomEvent(event, params) {
        var evt = document.createEvent('CustomEvent');
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      };

      CustomEvent.prototype = window.Event.prototype;

      window.CustomEvent = CustomEvent;
    })();
  }

  /* global window */

  var FUNCTION = 'function';
  var UNDEFINED = 'unedfined';

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== UNDEFINED) {
    window.addEventListener('VKWebAppEvent', function (e) {
      subscribers.forEach(function (fn) {
        fn(e);
      });
    });
  }

  var response = dataMocks;

  var index = {
    /**
     * Sends a message to native client
     *
     * @example
     * message.send('VKWebAppInit');
     *
     * @param {String} handler Message type
     * @param {Object} params Message data
     * @returns {void}
     */
    send: function send(handler, params) {
      /* eslint no-param-reassign: "off" */
      if (!params) {
        params = {};
      }

      var isClient = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== UNDEFINED;
      var desktopBridge = isClient && messageHandlers;

      desktopBridge[handler].postMessage(params);
    },
    /**
     * Subscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    subscribe: function subscribe(fn) {
      subscribers.push(fn);
    },
    /**
     * Unsubscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    unsubscribe: function unsubscribe(fn) {
      var index = subscribers.indexOf(fn);

      if (index > -1) {
        subscribers.splice(index, 1);
      }
    },

    /**
     * Checks if native client supports nandler
     *
     * @param {String} handler Handler name
     * @returns {boolean}
     */
    supports: function supports(handler) {
      var isClient = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== UNDEFINED;
      var desktopBridge = isClient && messageHandlers;

      if (desktopBridge && desktopBridge[handler] && _typeof(desktopBridge[handler].postMessage) === FUNCTION) {
        return true;
      }

      return false;
    }
  };

  exports.response = response;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
