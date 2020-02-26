import vkConnect from '../src';
import { ReceiveMethodName, VKConnectEvent, RequestIdProp } from '@vkontakte/vk-connect';
import { receiveOnlyMethods, callReceiveOnlyMethod } from '../src/mockFn';
import { mockDataMap } from '../src/mockData';

export const ioMethods = Object.keys(mockDataMap).filter(methodName => !receiveOnlyMethods.includes(methodName as any));

const dropRequestId = <A extends RequestIdProp>(data: A) => {
  const { request_id, ...out } = data;

  return out;
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
