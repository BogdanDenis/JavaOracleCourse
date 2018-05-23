import { CALL_API } from 'redux-api-middleware';

import { TokenService } from './';

export const tokenInjector = () => next => (action) => {
  const callApi = action[CALL_API];

  if (callApi) {
    if (callApi.headers === undefined || callApi.headers.Authorization === undefined) {
      const token = TokenService.getToken();
      if (token !== null) {
        const accessToken = token.access_token;
        const Authorization = accessToken ? `Bearer ${accessToken}` : '';
        callApi.headers = {
          ...callApi.headers,
          Authorization,
        };
      }
    }
  }

  return next(action);
};
