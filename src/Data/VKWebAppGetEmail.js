export const emailData = {
  type: 'VKWebAppGetEmailResult',
  data: {
    email: 'blablabla@gmail.com'
  }
};

export const emailDataError = {
  type: 'VKWebAppGetEmailFailed',
  error_data: {
    error_code: 1,
    error_msg: 'Error message',
    request_params: [],
  }
};
