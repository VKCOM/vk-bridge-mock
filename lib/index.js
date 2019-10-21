/* global window, CustomEvent */

var VKWebAppEvent = (function (data) {
  var evt = new CustomEvent('VKWebAppEvent', {
    detail: data
  });
  window.dispatchEvent(evt);
});

/* eslint no-unused-vars: "off" */
var GetUserInfo = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetUserInfo.data : response.VKWebAppGetUserInfo.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var Init = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppInit.data : response.VKWebAppInit.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var GetAuthToken = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetAuthToken.data : response.VKWebAppGetAuthToken.errorData);
    }
  };
});

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
      VKWebAppEvent(!hasError ? response.VKWebAppCallAPIMethod.data : response.VKWebAppCallAPIMethod.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var GetGeodata = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetGeodata.data : response.VKWebAppGetGeodata.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var GetPhoneNumber = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetPhoneNumber.data : response.VKWebAppGetPhoneNumber.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var GetClientVersion = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetClientVersion.data : response.VKWebAppGetClientVersion.errorData);
    }
  };
});

/* eslint no-unused-vars: "off" */
var GetEmail = (function () {
  var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    postMessage: function postMessage(params) {
      VKWebAppEvent(!hasError ? response.VKWebAppGetEmail.data : response.VKWebAppGetEmail.errorData);
    }
  };
});

var Default = (function (eventName) {
  var hasError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return {
    postMessage: function postMessage() {
      if (!response[eventName].data) {
        throw Error(eventName + ' data is not mocked');
      }
      if (!response[eventName].errorData) {
        throw Error(eventName + ' errorData is not mocked');
      }
      VKWebAppEvent(!hasError ? response[eventName].data : response[eventName].errorData);
    }
  };
});

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
  VKWebAppOpenPayForm: Default('VKWebAppOpenPayForm'),
  // TODO UI
  VKWebAppShare: Default('VKWebAppShare'),
  // TODO UI
  VKWebAppAllowNotifications: Default('VKWebAppAllowNotifications'),
  // TODO UI
  VKWebAppDenyNotifications: Default('VKWebAppDenyNotifications'),
  // TODO UI
  VKWebAppShowWallPostBox: Default('VKWebAppShowWallPostBox'),
  // TODO ???
  VKWebAppSetLocation: Default('VKWebAppSetLocation'),
  // TODO UI
  VKWebAppAllowMessagesFromGroup: Default('VKWebAppAllowMessagesFromGroup'),
  // TODO UI
  VKWebAppJoinGroup: Default('VKWebAppJoinGroup')
};

var subscribers = [];

var userData = {
  type: 'VKWebAppGetUserInfoResult',
  data: {
    id: 9999999999,
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
    access_token: 'yours000access111token222yours000access111token222yours000access111token2220123456789'
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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var DataModel = function () {
  function DataModel(data, errorData) {
    classCallCheck(this, DataModel);

    this.mockedData = data;
    this.mockedErrorData = errorData;
  }

  createClass(DataModel, [{
    key: 'data',
    set: function set(data) {
      this.mockedData = data;
    },
    get: function get() {
      return this.mockedData;
    }
  }, {
    key: 'errorData',
    set: function set(data) {
      this.mockedErrorData = data;
    },
    get: function get() {
      return this.mockedErrorData;
    }
  }]);
  return DataModel;
}();

var dataMocks = {
  // Data
  VKWebAppInit: new DataModel(initData, initDataError),
  // Data
  VKWebAppGetAuthToken: new DataModel(authData, authDataError),
  // Data
  VKWebAppCallAPIMethod: new DataModel(apiData, apiDataError),
  // Data
  VKWebAppGetGeodata: new DataModel(geoData, geoDataError),
  // Datab
  VKWebAppGetUserInfo: new DataModel(userData, userDataError),
  // Data
  VKWebAppGetPhoneNumber: new DataModel(phoneData, phoneDataError),
  // Data
  VKWebAppGetClientVersion: new DataModel(clientData, clientDataError),
  // Data
  VKWebAppGetEmail: new DataModel(emailData, emailDataError),
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

export default index;
export { response };
