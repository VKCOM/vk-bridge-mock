import vkConnect, {
  VKConnect,
  VKConnectSubscribeHandler,
  RequestMethodName,
  RequestProps,
  RequestIdProp,
  IOMethodName,
  ReceiveData,
  VKConnectSuccessEvent,
  ReceiveMethodName,
  ReceiveOnlyMethodName,
  VKConnectSend
} from '@vkontakte/vk-connect';
import { mockDataMap } from './mock';

export const receiveOnlyMethods: ReceiveOnlyMethodName[] = [
  'VKWebAppAudioPaused',
  'VKWebAppAudioStopped',
  'VKWebAppAudioTrackChanged',
  'VKWebAppAudioUnpaused',
  'VKWebAppInitAds',
  'VKWebAppLoadAds',
  'VKWebAppUpdateConfig',
  'VKWebAppViewHide',
  'VKWebAppViewRestore'
];

export const ioMethods = Object.keys(mockDataMap).filter(methodName => !receiveOnlyMethods.includes(methodName as any));

const state = {
  listeners: [] as VKConnectSubscribeHandler[],
  currentRequestId: 0,
  getNextRequestId() {
    this.currentRequestId++;

    return this.currentRequestId;
  }
};

const isReceiveMethodExists = (methodName: string): methodName is ReceiveMethodName => methodName in mockDataMap;

const getMockData = <T extends ReceiveMethodName>(
  methodName: T,
  props?: T extends IOMethodName ? RequestProps<T> : {}
): ReceiveData<T> | null => {
  if (isReceiveMethodExists(methodName) && mockDataMap[methodName]) {
    // FIXME
    return mockDataMap[methodName]!(props as any) as ReceiveData<T>;
  }

  return null;
};

const prepareResponse = <K extends ReceiveMethodName>(
  method: K,
  props?: K extends RequestMethodName ? RequestProps<K> & RequestIdProp : RequestIdProp
): VKConnectSuccessEvent<K> | null => {
  if (!isReceiveMethodExists(method)) {
    // TODO
    return null;
  }

  const data = {
    // FIXME: any
    ...getMockData(method, props as any)!,
    request_id: state.getNextRequestId()
  };

  const event: VKConnectSuccessEvent<K> = {
    detail: {
      type: receiveOnlyMethods.includes(method as any) ? method : method + 'Result',
      data
    }
  };

  return event;
};

const broadcastData = (event: VKConnectSuccessEvent<ReceiveMethodName>) => {
  state.listeners.forEach(listener => {
    listener(event);
  });
};

export const callReceiveOnlyMethod = (methodName: ReceiveOnlyMethodName) => {
  if (receiveOnlyMethods.includes(methodName)) {
    const event = prepareResponse(methodName);

    if (event) {
      broadcastData(event);
    }
  }
};

const send: VKConnectSend = async (method, props) => {
  return new Promise((resolve, reject) => {
    if (!isReceiveMethodExists(method)) {
      return;
    }

    const event = prepareResponse(method as ReceiveMethodName, props);

    if (!event) {
      return;
    }

    broadcastData(event);
    resolve(event.detail.data as any);
  });
};

const vkConnectMock: VKConnect = {
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
  subscribe: (fn: VKConnectSubscribeHandler) => void state.listeners.push(fn),

  /**
   * Removes an event listener which has been subscribed for event listening.
   *
   * @param listener A callback to unsubscribe.
   */
  unsubscribe: (fn: VKConnectSubscribeHandler) => {
    const index = state.listeners.indexOf(fn);

    if (index > -1) {
      state.listeners.splice(index, 1);
    }
  },

  /**
   * Checks if a method is supported on runtime platform.
   *
   * @param method Method (event) name to check.
   * @returns Result of checking.
   */
  supports: (method: string): boolean => vkConnect.supports(method),

  /**
   * Checks whether the runtime is a WebView.
   *
   * @returns Result of checking.
   */
  isWebView: (): boolean => vkConnect.isWebView()
};

export default vkConnectMock;
