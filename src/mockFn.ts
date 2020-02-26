import {
  ReceiveMethodName,
  RequestMethodName,
  IOMethodName,
  RequestProps,
  ReceiveData,
  RequestIdProp,
  VKBridgeSuccessEvent,
  VKBridgeSubscribeHandler,
  VKBridgeSend,
  ReceiveOnlyMethodName
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

const getMockData = <T extends ReceiveMethodName>(
  methodName: T,
  props?: T extends IOMethodName ? RequestProps<T> : {}
): ReceiveData<T> | null => {
  if (isReceiveMockMethodExists(methodName) && mockDataMap[methodName]) {
    // FIXME
    return mockDataMap[methodName]!(props as any) as ReceiveData<T>;
  }

  return null;
};

export const broadcastData = (event: VKBridgeSuccessEvent<ReceiveMethodName>) => {
  state.listeners.forEach(listener => {
    listener(event);
  });
};

export const prepareResponse = <K extends ReceiveMethodName>(
  method: K,
  props?: K extends RequestMethodName ? RequestProps<K> & RequestIdProp : RequestIdProp
): VKBridgeSuccessEvent<K> | null => {
  if (!isReceiveMockMethodExists(method)) {
    // TODO
    return null;
  }

  const data = {
    // FIXME: any
    ...getMockData(method, props as any)!,
    request_id: state.getNextRequestId()
  };

  const event: VKBridgeSuccessEvent<K> = {
    detail: {
      type: receiveOnlyMethods.includes(method as any) ? method : method + 'Result',
      data
    }
  };

  return event;
};

export const isReceiveMockMethodExists = (methodName: string): methodName is ReceiveMethodName =>
  methodName in mockDataMap;

export const send: VKBridgeSend = async (method, props) => {
  return new Promise((resolve, reject) => {
    if (!isReceiveMockMethodExists(method)) {
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
