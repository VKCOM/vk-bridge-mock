export const phoneData = {
  type: 'VKWebAppGetPhoneNumberResult',
  data: {
    phone_number: '79991112233',
    is_verified: true
  }
};

export const phoneDataError = {
  error_type: 'api_error',
  error_data: {
    error_code: 1,
    error_msg: 'Error message',
    request_params: [],
  }
};
