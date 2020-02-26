import {
  ReceiveMethodName,
  RequestMethodName,
  IOMethodName,
  RequestProps,
  ReceiveData,
  RequestIdProp,
  VKConnectSuccessEvent,
  VKConnectSubscribeHandler,
  VKConnectSend,
  ReceiveOnlyMethodName
} from '@vkontakte/vk-connect';
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
  listeners: [] as VKConnectSubscribeHandler[],
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

export const broadcastData = (event: VKConnectSuccessEvent<ReceiveMethodName>) => {
  state.listeners.forEach(listener => {
    listener(event);
  });
};

export const prepareResponse = <K extends ReceiveMethodName>(
  method: K,
  props?: K extends RequestMethodName ? RequestProps<K> & RequestIdProp : RequestIdProp
): VKConnectSuccessEvent<K> | null => {
  if (!isReceiveMockMethodExists(method)) {
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

export const isReceiveMockMethodExists = (methodName: string): methodName is ReceiveMethodName =>
  methodName in mockDataMap;

export const send: VKConnectSend = async (method, props) => {
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

export const subscribe = (fn: VKConnectSubscribeHandler) => void state.listeners.push(fn);

export const unsubscribe = (fn: VKConnectSubscribeHandler) => {
  const index = state.listeners.indexOf(fn);

  if (index > -1) {
    state.listeners.splice(index, 1);
  }
};
