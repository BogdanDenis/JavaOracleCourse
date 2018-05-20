import { RSAA } from 'redux-api-middleware';

import { saveDeveloper } from './save-developer';
import * as types from './types';
import * as endpoints from '../../constants';

export const getDeveloper = developerId => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_DEVELOPER(developerId),
			method: 'GET',
			types: [
				types.GET_DEVELOPER_REQUEST,
				{
					type: types.GET_DEVELOPER_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(developer => {
								dispatch(saveDeveloper(developer));
							});
					},
				},
				types.GET_DEVELOPER_FAIL,
			],
		},
	});
};
