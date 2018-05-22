import { RSAA } from 'redux-api-middleware';

import { saveProjectsIncompleteSprints } from './save-projects-incomplete-sprints';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectsIncompleteSprints = projectKey => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_PROJECTS_INCOMPLETE_SPRINTS(projectKey),
			method: 'GET',
			types: [
				types.GET_PROJECTS_INCOMPLETE_SPRINTS_REQUEST,
				{
					type: types.GET_PROJECTS_INCOMPLETE_SPRINTS_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(sprints => {
								dispatch(saveProjectsIncompleteSprints(sprints));
							});
					},
				},
				types.GET_PROJECTS_INCOMPLETE_SPRINTS_FAIL,
			],
		},
	});
};
