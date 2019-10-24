import vkConnect, { callReceiveOnlyMethod, receiveOnlyMethods, ioMethods } from '../src';
import { mockDataMap } from '../src/mock';
import { ReceiveMethodName, VKConnectEvent } from '@vkontakte/vk-connect';

describe('Simple send', () => {
  ioMethods.forEach(methodName => {
    test(
      methodName,
      () =>
        new Promise(resolve => {
          const handler = (event: VKConnectEvent<ReceiveMethodName>) => {
            expect(event.detail.type).toBe(methodName + 'Result');
            expect(event.detail.data).toMatchSnapshot(methodName);

            resolve(vkConnect.unsubscribe(handler));
          };

          vkConnect.subscribe(handler);
          vkConnect.send(methodName as any);
        })
    );
  });
});

describe('Send promise', () => {
  ioMethods.forEach(methodName => {
    test(methodName, async () => {
      const mockData = await vkConnect.sendPromise(methodName as any);

      expect(mockData).toMatchSnapshot(methodName);
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
            expect(event.detail.data).toMatchSnapshot(methodName);

            resolve(vkConnect.unsubscribe(handler));
          };

          vkConnect.subscribe(handler);
          callReceiveOnlyMethod(methodName as any);
        })
    );
  });
});
