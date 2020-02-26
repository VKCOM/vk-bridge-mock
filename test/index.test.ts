import vkConnect from '../src';
import { ReceiveMethodName, VKConnectEvent, RequestIdProp, ReceiveOnlyMethodName } from '@vkontakte/vk-connect';
import { prepareResponse, broadcastData } from '../src/mockFn';
import { mockDataMap } from '../src/mockData';

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

const dropRequestId = <A extends RequestIdProp>(data: A) => {
  const { request_id, ...out } = data;

  return out;
};

export const callReceiveOnlyMethod = (methodName: ReceiveOnlyMethodName) => {
  if (receiveOnlyMethods.includes(methodName)) {
    const event = prepareResponse(methodName);

    if (event) {
      broadcastData(event);
    }
  }
};

describe('Send', () => {
  ioMethods.forEach(methodName => {
    test(methodName, async () => {
      const mockData = await vkConnect.send(methodName as any);

      expect(dropRequestId(mockData)).toMatchSnapshot(methodName);
    });
  });
});

describe('Receive only events', () => {
  receiveOnlyMethods.forEach(methodName => {
    test(
      methodName,
      () =>
        new Promise(resolve => {
          const handler = (event: VKConnectEvent<ReceiveMethodName>) => {
            expect(event.detail.type).toBe(methodName);
            expect(dropRequestId(event.detail.data)).toMatchSnapshot(methodName);

            resolve(vkConnect.unsubscribe(handler));
          };

          vkConnect.subscribe(handler);
          callReceiveOnlyMethod(methodName as any);
        })
    );
  });
});
