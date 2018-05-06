import { RSAA } from 'redux-api-middleware';

import { saveViewedStory } from './save-viewed-story';
import * as types from './types';
import * as endpoints from '../../constants';

export const changeStoryDescription = userStory => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.CHANGE_STORY_DESCRIPTION,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userStory),
      types: [
        types.CHANGE_STORY_DESCRIPTION_REQUEST,
        {
          type: types.CHANGE_STORY_DESCRIPTION_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(userStory => {
                dispatch(saveViewedStory(userStory.key, userStory));
              });
          },
        },
        types.CHANGE_STORY_DESCRIPTION_FAIL,
      ],
    },
  });
};
