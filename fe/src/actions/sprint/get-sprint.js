import { RSAA } from 'redux-api-middleware';

import { getViewedProject } from '../';
import * as types from './types';
import * as endpoints from '../../constants';

export const getSprint = sprintId => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_SPRINT(sprintId),
			method: 'GET',
			types: [
				types.GET_SPRINT_REQUEST,
				{
					type: types.GET_SPRINT_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(sprint => {
								dispatch(getViewedProject(sprint.projectKey));
							});
					},
				},
				types.GET_SPRINT_FAIL,
			],
		},
	});
};
