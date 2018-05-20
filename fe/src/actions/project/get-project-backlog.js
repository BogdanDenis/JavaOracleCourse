import { RSAA } from 'redux-api-middleware';

import {
  saveProjectBacklog,
  getSprintsStories,
} from '../';
import * as types from './types';
import * as endpoints from '../../constants';

export const getProjectBacklog = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECT_BACKLOG(projectKey),
      method: 'GET',
      types: [
        types.GET_PROJECT_BACKLOG_REQUEST,
        {
          type: types.GET_PROJECT_BACKLOG_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(backlog => {
                dispatch(saveProjectBacklog(backlog));
                dispatch(getSprintsStories(backlog.id));
              });
          },
        },
        types.GET_PROJECT_BACKLOG_FAIL,
      ],
    },
  });
};
