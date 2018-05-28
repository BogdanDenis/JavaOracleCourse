import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

import { LOGIN_ROUTE } from '../../constants/routes';
import * as types from './types';
import * as endpoints from '../../constants';

export const createDeveloper = developerDTO => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.CREATE_DEVELOPER,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developerDTO),
			types: [
				types.CREATE_DEVELOPER_REQUEST,
				{
					type: types.CREATE_DEVELOPER_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(developer => {
								dispatch(push(LOGIN_ROUTE));
							});
					},
				},
				types.CREATE_DEVELOPER_FAIL,
			],
		},
	});
};
