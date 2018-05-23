import { RSAA } from 'redux-api-middleware';

import { TokenService } from '../../services';
import { saveDeveloperId } from './';
import * as types from './types';
import * as endpoints from '../../constants';

export const loginUser = (login, password) => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.AUTH_URL,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				login,
				password,
			}),
			types: [
				types.AUTH_REQUEST,
				{
					type: types.AUTH_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(token => {
								dispatch(saveDeveloperId(token.id));
								TokenService.saveToken(token);
							});
					},
				},
				types.AUTH_FAIL,
			],
		},
	});
};
