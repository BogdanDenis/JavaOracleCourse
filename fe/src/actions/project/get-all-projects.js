import { RSAA } from 'redux-api-middleware';

import { saveAllProjects } from './save-all-projects';
import * as types from './types';
import * as endpoints from '../../constants';

export const getAllProjects = () => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_ALL_PROJECTS_URL,
      method: 'GET',
      types: [
        types.GET_ALL_PROJECTS_REQUEST,
        {
          type: types.GET_ALL_PROJECTS_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(projects => {
                dispatch(saveAllProjects(projects));
              });
          },
        },
        types.GET_ALL_PROJECTS_FAIL,
      ],
    },
  });
}
