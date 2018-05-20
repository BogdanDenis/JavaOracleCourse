import { RSAA } from 'redux-api-middleware';

import { getStory } from '../';
import { saveViewedIssue } from './';
import * as types from './types';
import * as endpoints from '../../constants';

export const getViewedIssue = issueKey => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: endpoints.GET_ISSUE(issueKey),
			method: 'GET',
			types: [
				types.GET_VIEWED_ISSUE_REQUEST,
				{
					type: types.GET_VIEWED_ISSUE_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(issue => {
								dispatch(saveViewedIssue(issue));
								dispatch(getStory(issue.storyKey));
							});
					},
				},
				types.GET_VIEWED_ISSUE_FAIL,
			],
		},
	});
};
