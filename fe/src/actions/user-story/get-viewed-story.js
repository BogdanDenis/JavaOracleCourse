import { RSAA } from 'redux-api-middleware';

import { saveViewedStory } from './save-viewed-story';
import * as types from './types';
import * as endpoints from '../../constants';

export const getViewedStory = storyKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_USER_STORY(storyKey),
      method: 'GET',
      types: [
        types.GET_VIEWED_STORY_REQUEST,
        {
          type: types.GET_VIEWED_STORY_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(story => {
                dispatch(saveViewedStory(story));
              });
          },
        },
        types.GET_VIEWED_STORY_FAIL,
      ],
    },
  });
};
