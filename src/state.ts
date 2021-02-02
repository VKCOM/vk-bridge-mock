import {
  VKBridgeSubscribeHandler,
} from '@vkontakte/vk-bridge';

type ResultType = { result: true  };
type GetAppStoragePropsType = { keys: string[] };
type SetAppStorageItemResultType = { key: string, value: string };

export const state = {
  listeners: [] as VKBridgeSubscribeHandler[],
  currentRequestId: 0,
  appStorage: {
    keys: [
      { key: 'somekey0', value: 'somevalue0' },
      { key: 'somekey1', value: 'somevalue1' }
    ]
  },
  getNextRequestId() {
    this.currentRequestId++;

    return this.currentRequestId;
  },
  getAppStorage({ keys }: GetAppStoragePropsType) {
    return { keys: this.appStorage.keys.filter(it => keys.includes(it.key))};
  },
  getAppStorageKeys() {
    return ({ keys: this.appStorage.keys.map(it => it.key) });
  },
  setAppStorageItem({ key, value }: SetAppStorageItemResultType): ResultType {
    this.appStorage = { keys: state.appStorage.keys.concat({ key, value })};
    return { result: true  }; 
  },
};