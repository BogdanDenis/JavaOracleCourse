import { RSAA } from 'redux-api-middleware';

import { saveViewedProject } from './save-viewed-project';
import * as endpoints from '../../constants';
import * as types from './types';

export const getViewedProject = projectKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_PROJECT_URL(projectKey),
      method: 'GET',
      types: [
        types.GET_VIEWED_PROJECT_REQUEST,
        {
          type: types.GET_VIEWED_PROJECT_SUCESS,
          payload: (_, __, res) => {
            res.json()
              .then(project => {
                dispatch(saveViewedProject(project));
              });
          },
        },
        types.GET_VIEWED_PROJECT_FAIL,
      ],
    },
  });
}
