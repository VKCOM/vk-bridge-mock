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
  ReceiveOnlyMethodName
} from '@vkontakte/vk-connect';
import { mockDataMap } from './mock';

const receiveOnlyMethods: ReceiveOnlyMethodName[] = [
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
  if (isReceiveMethodExists(methodName)) {
    // FIXME: any
    return mockDataMap[methodName](props as any) as ReceiveData<T>;
  }

  return null;
};

const prepareResponse = <K extends ReceiveMethodName>(
  method: K,
  // TODO
  props?: K extends RequestMethodName ? RequestProps<K> : {}
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
      type: method + 'Result',
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

const vkConnectMock: VKConnect = {
  /**
   * Sends a VK Connect method to client
   *
   * @example
   * message.send('VKWebAppInit');
   *
   * @param method The VK Connect method
   * @param [props] Method props object
   */
  send: <K extends RequestMethodName>(method: K, props?: RequestProps<K> & RequestIdProp) => {
    if (!isReceiveMethodExists(method)) {
      // TODO
      return;
    }

    const event = prepareResponse(method, props as any);

    if (!event) {
      return;
    }

    broadcastData(event);
  },

  /**
   * Subscribe on VKWebAppEvent
   *
   * @param fn Event handler
   */
  subscribe: (fn: VKConnectSubscribeHandler) => void state.listeners.push(fn),

  /**
   * Sends a VK Connect method to client and returns a promise of response data
   *
   * @param method The VK Connect method
   * @param [props] Method props object
   * @returns Promise of response data
   */
  sendPromise: async <K extends IOMethodName>(method: K, props?: RequestProps<K>): Promise<ReceiveData<K>> => {
    return new Promise(resolve => {
      // if (!isReceiveMethodExists(method)) {
      // TODO
      // }

      const event = prepareResponse(method, props as any);

      if (!event) {
        return;
      }

      broadcastData(event);
      resolve(event.detail.data);
    });
  },

  /**
   * Unsubscribe on VKWebAppEvent
   *
   * @param fn Event handler
   */
  unsubscribe: (fn: VKConnectSubscribeHandler) => {
    const index = state.listeners.indexOf(fn);

    if (index > -1) {
      state.listeners.splice(index, 1);
    }
  },

  /**
   * Checks if it is client webview
   */
  supports: (method: string): boolean => vkConnect.supports(method),

  /**
   * Checks if native client supports handler
   *
   * @param method The VK Connect method
   */
  isWebView: (): boolean => vkConnect.isWebView()
};

export default vkConnectMock;
