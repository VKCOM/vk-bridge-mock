export const clientData = {
  type: 'VKWebAppGetClientVersionResult',
  data: {
    platform: 'android',
    version: '5.3.2'
  }
};

export const clientDataError = {
  error_type: 'api_error',
  error_data: {
    error_code: 1,
    error_msg: 'Error message',
    request_params: [],
  }
};
