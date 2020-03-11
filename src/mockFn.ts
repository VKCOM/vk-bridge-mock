import {
  AnyReceiveMethodName,
  AnyRequestMethodName,
  AnyIOMethodName,
  RequestProps,
  ReceiveData,
  RequestIdProp,
  VKBridgeSubscribeHandler,
  VKBridgeSend,
  ReceiveOnlyMethodName,
  VKBridgeResultEvent,
  AnyReceiveOnlyMethodName,
  AnyMethodName
} from '@vkontakte/vk-bridge';
import { mockDataMap } from './mockData';

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

const state = {
  listeners: [] as VKBridgeSubscribeHandler[],
  currentRequestId: 0,
  getNextRequestId() {
    this.currentRequestId++;

    return this.currentRequestId;
  }
};

const getMockData = <T extends AnyReceiveMethodName>(
  methodName: T,
  props?: T extends AnyIOMethodName ? RequestProps<T> : {}
): ReceiveData<T> | null => {
  if (isReceiveMockMethodExists(methodName) && mockDataMap[methodName]) {
    // FIXME
    return mockDataMap[methodName]!(props as any) as ReceiveData<T>;
  }

  return null;
};

const isReceiveOnlyMethod = <A extends AnyReceiveOnlyMethodName>(method: AnyMethodName): method is A =>
  receiveOnlyMethods.includes(method as any);

export const broadcastData = (event: VKBridgeResultEvent<AnyReceiveMethodName>) => {
  state.listeners.forEach(listener => {
    listener(event);
  });
};

export const prepareResponse = <K extends AnyReceiveMethodName>(
  method: K,
  props?: K extends AnyRequestMethodName ? RequestProps<K> & RequestIdProp : RequestIdProp
): VKBridgeResultEvent<K> => {
  if (!isReceiveMockMethodExists(method)) {
    throw new Error(`Missing mock data for ${method} event`);
  }

  const mockData: ReceiveData<K> | null = getMockData(method, props);

  if (mockData == null) {
    throw new Error(`Unable to get mock data for ${method} event`);
  }

  if (isReceiveOnlyMethod(method)) {
    return {
      detail: {
        type: method,
        data: mockData
      }
    } as VKBridgeResultEvent<K>;
  } else {
    const data: ReceiveData<K> & RequestIdProp = {
      ...getMockData(method, props as any)!,
      request_id: state.getNextRequestId()
    };

    const type = method + 'Result';

    return {
      detail: {
        type,
        data
      }
    } as VKBridgeResultEvent<K>;
  }
};

export const isReceiveMockMethodExists = (methodName: string): methodName is AnyReceiveMethodName =>
  methodName in mockDataMap;

export const send: VKBridgeSend = async (method, props) => {
  return new Promise((resolve, reject) => {
    if (!isReceiveMockMethodExists(method)) {
      return;
    }

    const event = prepareResponse(method as AnyReceiveMethodName, props);

    if (!event) {
      return;
    }

    broadcastData(event);
    resolve(event.detail.data as any);
  });
};

export const subscribe = (fn: VKBridgeSubscribeHandler) => void state.listeners.push(fn);

export const unsubscribe = (fn: VKBridgeSubscribeHandler) => {
  const index = state.listeners.indexOf(fn);

  if (index > -1) {
    state.listeners.splice(index, 1);
  }
};

export const callReceiveOnlyMethod = (methodName: ReceiveOnlyMethodName) => {
  if (receiveOnlyMethods.includes(methodName)) {
    const event = prepareResponse(methodName);

    if (event) {
      broadcastData(event);
    }
  }
};
