import { RSAA } from 'redux-api-middleware';

import * as types from './types';
import * as endpoints from '../../constants';

export const deleteWorkload = workloadDTO => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.DELETE_WORKLOAD,
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(workloadDTO),
			types: [
				types.DELETE_WORKLOAD_REQUEST,
				types.DELETE_WORKLOAD_SUCCESS,
				types.DELETE_WORKLOAD_FAIL,
			],
		},
	});
};
