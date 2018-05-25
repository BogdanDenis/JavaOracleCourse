import { RSAA } from 'redux-api-middleware';

import { getProjectsDeveloper } from '../';
import * as types from './types';
import * as endpoints from '../../constants';

export const createWorkload = workload => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.CREATE_WORKLOAD,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(workload),
			types: [
				types.CREATE_WORKLOAD_REQUEST,
				{
					type: types.CREATE_WORKLOAD_SUCCESS,
					payload: () => {
						dispatch(getProjectsDeveloper(workload.developerId));
					}
				},
				types.CREATE_WORKLOAD_FAIL,
			],
		},
	});
};
