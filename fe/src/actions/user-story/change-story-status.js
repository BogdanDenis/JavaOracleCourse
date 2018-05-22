import { RSAA } from 'redux-api-middleware';

import { saveViewedStory } from './save-viewed-story';
import * as types from './types';
import * as endpoints from '../../constants';

export const changeStoryStatus = storyStatusDTO => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.CHANGE_STORY_STATUS,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(storyStatusDTO),
      types: [
        types.CHANGE_STORY_STATUS_REQUEST,
        {
          type: types.CHANGE_STORY_STATUS_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(story => {
                
              });
          },
        },
        types.CHANGE_STORY_STATUS_FAIL,
      ],
    },
  });
};
