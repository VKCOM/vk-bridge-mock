import bridge from '../src';
import { VKBridgeEvent, RequestIdProp, AnyReceiveMethodName } from '@vkontakte/vk-bridge';
import { callReceiveOnlyMethod, receiveOnlyMethods } from '../src/mockFn';
import { mockDataMap } from '../src/mockData';

export const ioMethods = Object.keys(mockDataMap).filter(methodName => !receiveOnlyMethods.includes(methodName as any));

const dropRequestId = (data: {}) => {
  // @ts-ignore
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
          const handler = (event: VKBridgeEvent<AnyReceiveMethodName>) => {
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
