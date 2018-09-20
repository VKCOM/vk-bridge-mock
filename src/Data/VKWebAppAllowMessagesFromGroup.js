export const allowMessagesFromGroupData = {
  type: 'VKWebAppAllowMessagesFromGroupResult',
  data: {
    result: true
  }
};

export const allowMessagesFromGroupDataError = {
  type: 'VKWebAppAllowMessagesFromGroupFailed',
  data: {
    error_type: 'api_error',
    error_data: {
      error_code: 1,
      error_msg: 'Error message',
      request_params: [],
    }
  }
};
