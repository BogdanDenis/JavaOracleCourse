import { RSAA } from 'redux-api-middleware';

import * as types from './types';
import * as endpoints from '../../constants';

export const createUserStory = userStory => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.CREATE_USER_STORY,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userStory),
			types: [
				types.CREATE_USER_STORY_REQUEST,
				{
					type: types.CREATE_USER_STORY_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(story => {

							});
					},
				},
				types.CREATE_USER_STORY_FAIL,
			],
		},
	});
};
