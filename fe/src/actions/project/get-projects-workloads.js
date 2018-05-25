import { RSAA } from 'redux-api-middleware';

import { getDeveloper } from '../';
import { getProjectsDeveloper } from './';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectsWorkloads = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECTS_DEVELOPERS(projectKey),
      method: 'GET',
      types: [
        types.GET_PROJECTS_DEVELOPERS_REQUEST,
        {
          type: types.GET_PROJECTS_DEVELOPERS_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(workloads => {
                workloads.map(workload => {
                  dispatch(getDeveloper(workload.developerId));
                  dispatch(getProjectsDeveloper(workload.developerId));
                });
              });
          },
        },
        types.GET_PROJECTS_DEVELOPERS_FAIL,
      ],
    },
  });
};
