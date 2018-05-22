import { RSAA } from 'redux-api-middleware';

import * as types from './types';
import * as endpoints from '../../constants';

export const startSprint = sprintId => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.START_SPRINT(sprintId),
			method: 'PATCH',
			types: [
				types.START_SPRINT_REQUEST,
				{
					type: types.START_SPRINT_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(sprint => {

							});
					},
				},
				types.START_SPRINT_FAIL,
			],
		},
	});
};
