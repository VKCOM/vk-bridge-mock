export const userData = {
  type: 'VKWebAppGetUserInfoResult',
  data: {
    id: 9999999999,
    photo_100: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    first_name: 'Karl Heinrich',
    last_name: 'Marx',
    sex: 0,
    city: {
      id: 1,
      title: 'Санкт-Петербург',
    },
    country: {
      id: 1,
      title: 'Россия'
    },
    timezone: 3
  },
};

export const userDataError = {
  error_type: 'api_error',
  error_data: {
    error_code: 1,
    error_msg: 'Error message',
    request_params: [],
  }
};
