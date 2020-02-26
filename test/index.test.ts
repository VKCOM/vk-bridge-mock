import bridge from '../src';
import { ReceiveMethodName, VKBridgeEvent, RequestIdProp, ReceiveOnlyMethodName } from '@vkontakte/vk-bridge';
import { callReceiveOnlyMethod } from '../src/mockFn';
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

describe('Send', () => {
  ioMethods.forEach(methodName => {
    test(methodName, async () => {
      const mockData = await bridge.send(methodName as any);

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
          const handler = (event: VKBridgeEvent<ReceiveMethodName>) => {
            expect(event.detail.type).toBe(methodName);
            expect(dropRequestId(event.detail.data)).toMatchSnapshot(methodName);

            resolve(bridge.unsubscribe(handler));
          };

          bridge.subscribe(handler);
          callReceiveOnlyMethod(methodName as any);
        })
    );
  });
});
