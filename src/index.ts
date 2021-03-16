import bridge, { VKBridge } from '@vkontakte/vk-bridge';
import { send, subscribe, unsubscribe } from './mockFn';

const bridgeMock: VKBridge = {
  /**
   * Sends an event to the runtime env and returns the Promise object with
   * response data. In the case of Android/iOS application env is the
   * application itself. In the case of the browser, the parent frame in which
   * the event handlers is located.
   *
   * @param method The method (event) name to send.
   * @param [props] Method properties.
   * @returns The Promise object with response data.
   */
  send,

  /**
   * @alias send
   * @deprecated
   */
  sendPromise: send,

  /**
   * Adds an event listener. It will be called any time a data is received.
   *
   * @param listener A callback to be invoked on every event receive.
   */
  subscribe,

  /**
   * Removes an event listener which has been subscribed for event listening.
   *
   * @param listener A callback to unsubscribe.
   */
  unsubscribe,

  /**
   * Checks if a method is supported on runtime platform.
   *
   * @param method Method (event) name to check.
   * @returns Result of checking.
   */
  supports: (method: string): boolean => bridge.supports(method),

  /**
   * Checks whether the runtime is a WebView.
   *
   * @returns Result of checking.
   */
  isWebView: (): boolean => bridge.isWebView(),

  /**
   * Checks whether the runtime is an iframe.
   *
   * @returns Result of checking.
   */
   isIframe: (): boolean => bridge.isIframe(),

   /**
   * Checks whether the runtime is embedded.
   *
   * @returns Result of checking.
   */
  isEmbedded: (): boolean => bridge.isEmbedded(),

  /**
   * Checks whether the runtime is standalone.
   *
   * @returns Result of checking.
   */
   isStandalone: (): boolean => bridge.isStandalone(),
};

// Esm exports
export { callReceiveOnlyMethod } from './mockFn';
export default bridgeMock;
