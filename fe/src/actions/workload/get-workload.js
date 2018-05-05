import { RSAA } from 'redux-api-middleware';

import { saveWorkload } from './save-workload';
import * as types from './types';
import * as endpoints from '../../constants';

export const getWorkload = developerId => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_DEVELOPERS_WORKLOAD(developerId),
      method: 'GET',
      types: [
        types.GET_DEVELOPERS_WORKLOAD_REQUEST,
        {
          type: types.GET_DEVELOPERS_WORKLOAD_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then((workloads) => {
                dispatch(saveWorkload(developerId, workloads));
              });
          },
        },
        types.GET_DEVELOPERS_WORKLOAD_FAIL,
      ],
    },
  });
}
