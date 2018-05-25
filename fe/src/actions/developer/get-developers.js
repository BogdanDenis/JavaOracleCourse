import { RSAA } from 'redux-api-middleware';

import { saveDevelopers } from './save-developers';
import * as types from './types';
import * as endpoints from '../../constants';

export const getDevelopers = () => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_DEVELOPERS,
			method: 'GET',
			types: [
				types.GET_DEVELOPERS_REQUEST,
				{
					type: types.GET_DEVELOPERS_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(developers => {
								dispatch(saveDevelopers(developers));
							});
					},
				},
				types.GET_DEVELOPERS_FAIL,
			],
		},
	});
};
