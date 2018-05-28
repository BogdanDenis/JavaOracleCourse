import { RSAA } from 'redux-api-middleware';

import * as types from './types';
import * as endpoints from '../../constants';

export const createProject = projectDTO => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.CREATE_PROJECT,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(projectDTO),
			types: [
				types.CREATE_PROJECT_REQUEST,
				types.CREATE_PROJECT_SUCCESS,
				types.CREATE_PROJECT_FAIL,
			],
		},
	});
};
