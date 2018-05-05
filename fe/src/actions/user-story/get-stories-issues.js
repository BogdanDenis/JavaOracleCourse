import { RSAA } from 'redux-api-middleware';

import { saveStoriesIssues } from './save-stories-issues';
import * as types from './types';
import * as endpoints from '../../constants';

export const getStoriesIssues = storyKey => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: endpoints.GET_STORIES_ISSUES(storyKey),
      method: 'GET',
      types: [
        types.GET_STORIES_ISSUES_REQUEST,
        {
          type: types.GET_STORIES_ISSUES_SUCCESS,
          payload: (_, __, res) => {
            res.json()
              .then(issues => {
                dispatch(saveStoriesIssues(storyKey, issues));
              });
          },
        },
        types.GET_STORIES_ISSUES_FAIL,
      ],
    },
  });
};
