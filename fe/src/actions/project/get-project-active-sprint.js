import { RSAA } from 'redux-api-middleware';

import { saveProjectActiveSprint } from './save-project-active-sprint';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectActiveSprint = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECT_ACTIVE_SPRINT(projectKey),
      method: 'GET',
      types: [
        types.GET_PROJECT_ACTIVE_SPRINT_REQUEST,
        {
          type: types.GET_PROJECT_ACTIVE_SPRINT_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(sprint => {
                saveProjectActiveSprint(sprint);
              });
          },
        },
        types.GET_PROJECT_ACTIVE_SPRINT_FAIL,
      ],
    },
  });
};
