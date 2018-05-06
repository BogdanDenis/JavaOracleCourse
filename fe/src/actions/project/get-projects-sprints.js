import { RSAA } from 'redux-api-middleware';

import { saveProjectsSprints } from './save-projects-sprints';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectsSprints = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECTS_SPRINTS(projectKey),
      method: 'GET',
      types: [
        types.GET_PROJECTS_SPRINTS_REQUEST,
        {
          type: types.GET_PROJECTS_SPRINTS_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(sprints => {
                dispatch(saveProjectsSprints(sprints));
              });
          },
        },
        types.GET_PROJECTS_SPRINTS_FAIL,
      ],
    },
  });
};
