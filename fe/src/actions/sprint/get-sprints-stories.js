import { RSAA } from 'redux-api-middleware';

import { saveSprintsStories } from './save-sprints-stories';
import * as types from './types';
import * as endpoints from '../../constants';

export const getSprintsStories = sprintId => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_SPRINTS_STORIES(sprintId),
      method: 'GET',
      types: [
        types.GET_SPRINTS_STORIES_REQUEST,
        {
          type: types.GET_SPRINTS_STORIES_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(stories => {
                dispatch(saveSprintsStories(sprintId, stories));
              });
          },
        },
        types.GET_SPRINTS_STORIES_FAIL,
      ],
    },
  });
};
