import { RSAA } from 'redux-api-middleware';

import * as types from './types';
import * as endpoints from '../../constants';

export const completeSprint = sprintId => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.COMPLETE_SPRINT(sprintId),
      method: 'PATCH',
      types: [
        types.COMPLETE_SPRINT_REQUEST,
        {
          type: types.COMPLETE_SPRINT_SUCCESS,
          payload: (_, __, res) => {

          },
        },
        types.COMPLETE_SPRINT_FAIL,
      ],
    },
  });
};
