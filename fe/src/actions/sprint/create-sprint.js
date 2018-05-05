import { RSAA } from 'redux-api-middleware';

import { saveProjectActiveSprint } from '../../actions';
import * as types from './types';
import * as endpoints from '../../constants';

export const createSprint = sprint => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.CREATE_SPRINT,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sprint),
      types: [
        types.CREATE_SPRINT_REQUEST,
        {
          type: types.CREATE_SPRINT_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(data => {
                console.log("SPRINT", data);
                saveProjectActiveSprint(sprint);
              });
          },
        },
        types.CREATE_SPRINT_FAIL,
      ],
    },
  });
};
