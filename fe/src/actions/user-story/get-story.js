import { RSAA } from 'redux-api-middleware';

import { getSprint } from '../';
import * as types from './types';
import * as endpoints from '../../constants';

export const getStory = storyKey => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_USER_STORY(storyKey),
			method: 'GET',
			types: [
				types.GET_STORY_REQUEST,
				{
					type: types.GET_STORY_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(story => {
								dispatch(getSprint(story.sprintId));
							});
					},
				},
				types.GET_STORY_FAIL,
			],
		},
	});
};
