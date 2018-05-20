import { RSAA } from 'redux-api-middleware';

import {
  saveProjectActiveSprint,
  getSprintsStories,
} from '../';
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
                dispatch(saveProjectActiveSprint(sprint));
                dispatch(getSprintsStories(sprint.id));
              });
          },
        },
        types.GET_PROJECT_ACTIVE_SPRINT_FAIL,
      ],
    },
  });
};
