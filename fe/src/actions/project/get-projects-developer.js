import { RSAA } from 'redux-api-middleware';

import { saveProjectsDeveloper } from './save-projects-developer';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectsDeveloper = developerId => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_DEVELOPER(developerId),
			method: 'GET',
			types: [
				types.GET_PROJECTS_DEVELOPER_REQUEST,
				{
					type: types.GET_PROJECTS_DEVELOPER_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(developer => {
								dispatch(saveProjectsDeveloper(developer));
							});
					},
				},
				types.GET_PROJECTS_DEVELOPER_FAIL,
			],
		},
	});
};
