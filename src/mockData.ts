import { ReceiveDataMap, ReceiveMethodName, RequestMethodName, RequestPropsMap } from '@vkontakte/vk-bridge';

const mockAccessToken = 'yours000access111token222yours000access111token222yours000access111token2220123456789';

export const mockDataMap: {
  [T in ReceiveMethodName]: (props: T extends RequestMethodName ? RequestPropsMap[T] : {}) => ReceiveDataMap[T];
} = {
  VKWebAppInit: () => ({ result: true }),
  VKWebAppAddToCommunity: () => ({ group_id: 123_456_789 }),
  VKWebAppAllowMessagesFromGroup: () => ({ result: true }),
  VKWebAppAllowNotifications: () => ({ result: true }),
  VKWebAppCallAPIMethod: () => ({
    response: [
      {
        id: 210700286,
        first_name: 'Lindsey',
        last_name: 'Stirling',
        is_closed: false,
        can_access_closed: true,
        city: { id: 5331, title: 'Los Angeles' },
        photo_50: 'https://sun9-12.u...0uN_RKSXc.jpg?ava=1',
        verified: 1
      }
    ]
  }),
  VKWebAppGetAuthToken: () => ({ access_token: mockAccessToken, scope: 'friends,photos,video,wall' }),
  VKWebAppClose: () => ({ payload: {} }),
  VKWebAppOpenApp: () => ({ result: true }),
  VKWebAppDenyNotifications: () => ({ result: true }),
  VKWebAppFlashGetInfo: () => ({ is_available: true, level: 1.6 }),
  VKWebAppFlashSetLevel: () => ({ result: true }),
  VKWebAppGetClientVersion: () => ({ platform: 'android', version: '5.3.2' }),
  VKWebAppGetEmail: () => ({ email: 'test@gmail.com', sign: 'Y1C99xnbEaR8Wred' }),
  VKWebAppGetFriends: () => ({
    users: [
      { id: 2884043, first_name: 'Albert', last_name: 'Usmanov' },
      { id: 1894768, first_name: 'Aleksandra', last_name: 'Sokolovskaya' }
    ]
  }),
  VKWebAppGetGeodata: () => ({ available: true, lat: '-37', long: '89' }),
  VKWebAppGetPersonalCard: () => ({
    phone: '+79001112233',
    email: 'ivan@gmail.com',
    address: {
      country: { id: 1, name: 'Россия' },
      city: { id: 2, name: 'Санкт-Петербург' },
      specified_address: 'Невский пр., д. 28',
      postal_code: '191186'
    }
  }),
  VKWebAppGetPhoneNumber: () => ({ phone_number: '79111234567', sign: 'Y1C99xnbEaR8Wred', is_verified: true }),
  VKWebAppGetUserInfo: () => ({
    id: 2314852,
    first_name: 'Ирина',
    last_name: 'Денежкина',
    sex: 1,
    city: { id: 2, title: 'Санкт-Петербург' },
    country: { id: 1, title: 'Россия' },
    bdate: '10.4.1990',
    photo_100: 'https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg',
    photo_200: 'https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg',
    timezone: 3
  }),
  VKWebAppJoinGroup: () => ({ result: true }),
  VKWebAppOpenCodeReader: () => ({ code_data: 'Some text' }),
  VKWebAppOpenQR: () => ({ code_data: 'Some text' }),
  VKWebAppOpenContacts: () => ({ phone: '79217770099', first_name: 'Сестра', last_name: '' }),
  VKWebAppOpenPayForm: () => ({
    status: true,
    transaction_id: '150349AC-BDC6-11E9-83B6-5D798FB6FAB1',
    amount: '1.01',
    extra: null
  }),
  VKWebAppResizeWindow: () => ({ width: 800, height: 1000 }),
  VKWebAppScroll: () => ({ top: 1, height: 2040 }),
  VKWebAppSetLocation: () => ({ result: true }),
  VKWebAppSetViewSettings: () => ({ result: true }),
  VKWebAppShare: () => ({ type: 'message' }),
  VKWebAppShowCommunityWidgetPreviewBox: () => ({ result: true }),
  VKWebAppShowImages: () => ({ result: true }),
  VKWebAppShowInviteBox: () => ({ success: true }),
  VKWebAppShowLeaderBoardBox: () => ({ success: true }),
  VKWebAppShowMessageBox: () => ({ result: true }),
  VKWebAppShowOrderBox: () => ({ status: 'cancel' }),
  VKWebAppShowRequestBox: () => ({ success: true, requestKey: '123242' }),
  VKWebAppShowWallPostBox: () => ({ post_id: 1 }),
  VKWebAppStorageGet: () => ({
    keys: [
      { key: 'somekey0', value: 'somevalue0' },
      { key: 'somekey1', value: 'somevalue1' }
    ]
  }),
  VKWebAppStorageGetKeys: () => ({ keys: ['somekey0', 'somekey1'] }),
  VKWebAppStorageSet: () => ({ result: true }),
  VKWebAppTapticImpactOccurred: () => ({ result: true }),
  VKWebAppTapticNotificationOccurred: () => ({ result: true }),
  VKWebAppTapticSelectionChanged: () => ({ result: true }),
  VKWebAppAddToFavorites: () => ({ result: true }),
  VKWebAppSendPayload: () => ({ result: true }),
  VKWebAppGetCommunityToken: () => ({ access_token: mockAccessToken }),
  VKWebAppGetCommunityAuthToken: () => ({ access_token: mockAccessToken }),
  VKWebAppCommunityAccessToken: () => ({ access_token: mockAccessToken }),
  VKWebAppCommunityToken: () => ({ access_token: mockAccessToken }),
  VKWebAppDisableSwipeBack: () => ({ result: true }),
  VKWebAppEnableSwipeBack: () => ({ result: true }),
  // Incoming only methods
  VKWebAppAudioPaused: () => ({ type: 'file', position: 34, id: 'audio_track_01.mp3' }),
  VKWebAppAudioStopped: () => ({}),
  VKWebAppAudioTrackChanged: () => ({ type: 'file', id: 'audio_track_01.mp3' }),
  VKWebAppAudioUnpaused: () => ({ type: 'file', id: 'audio_track_01.mp3' }),
  VKWebAppInitAds: () => ({ init: 'true' }),
  VKWebAppLoadAds: () => ({ load: 'true' }),
  VKWebAppUpdateConfig: () => ({
    app: 'vkclient',
    app_id: '3087106',
    appearance: 'light',
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
    scheme: 'client_light',
    start_time: 1565272434.911599
  }),
  VKWebAppViewHide: () => ({}),
  VKWebAppViewRestore: () => ({}),
  VKWebAppShowStoryBox: () => ({ result: true }),
  VKWebAppAccelerometerChanged: () => ({ x: '3.0', y: '-1.3', z: '0.0' }),
  VKWebAppAccelerometerStart: () => ({ result: true }),
  VKWebAppAccelerometerStop: () => ({ result: true }),
  VKWebAppAudioPause: () => ({ result: true }),
  VKWebAppCopyText: () => ({ result: true }),
  VKWebAppDeviceMotionChanged: () => ({ alpha: '3.0', beta: '-1.3', gamma: '0.0' }),
  VKWebAppDeviceMotionStart: () => ({ result: true }),
  VKWebAppDeviceMotionStop: () => ({ result: true }),
  VKWebAppGyroscopeChanged: () => ({ x: '3.0', y: '-1.3', z: '0.0' }),
  VKWebAppGyroscopeStart: () => ({ result: true }),
  VKWebAppGyroscopeStop: () => ({ result: true }),
  VKWebAppLocationChanged: () => ({ location: 'test' }),
  VKWebAppSubscribeStoryApp: () => ({ access_key: mockAccessToken }),
  VKWebAppUpdateInsets: () => ({ insets: { right: 0, top: 44, left: 0, bottom: 34 } })
};
