/* global window */

import messageHandlers from './Handlers';
import subscribers from './Subscribers';
import dataMocks from './Data';
import './CustomEvent';

const FUNCTION = 'function';
const UNDEFINED = 'unedfined';

if (typeof window !== UNDEFINED) {
  window.addEventListener('VKWebAppEvent', (e) => {
    subscribers.forEach((fn) => {
      fn(e);
    });
  });
}

export const response = dataMocks;

export default {
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
  send: (handler, params) => {
    /* eslint no-param-reassign: "off" */
    if (!params) {
      params = {};
    }

    const isClient = typeof window !== UNDEFINED;
    const desktopBridge = isClient && messageHandlers;

    desktopBridge[handler].postMessage(params);
  },
  /**
   * Subscribe on VKWebAppEvent
   *
   * @param {Function} fn Event handler
   * @returns {void}
   */
  subscribe: (fn) => {
    subscribers.push(fn);
  },
  /**
   * Unsubscribe on VKWebAppEvent
   *
   * @param {Function} fn Event handler
   * @returns {void}
   */
  unsubscribe: (fn) => {
    const index = subscribers.indexOf(fn);

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
  supports: (handler) => {
    const isClient = typeof window !== UNDEFINED;
    const desktopBridge = isClient && messageHandlers;

    if (desktopBridge &&
      desktopBridge[handler] &&
      typeof desktopBridge[handler].postMessage === FUNCTION) {
      return true;
    }

    return false;
  }
};
