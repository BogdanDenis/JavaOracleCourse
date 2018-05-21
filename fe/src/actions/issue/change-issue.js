import { RSAA } from 'redux-api-middleware';

import { saveViewedIssue } from './save-viewed-issue';
import { ISSUE_FIELDS } from '../../constants/issue';
import * as types from './types';
import * as endpoints from '../../constants/endpoints';

const getChangeEndpoint = (field) => {
	switch (field) {
		case ISSUE_FIELDS.TYPE:
			return endpoints.CHANGE_ISSUE_TYPE;
		case ISSUE_FIELDS.STATUS:
			return endpoints.CHANGE_ISSUE_STATUS;
		case ISSUE_FIELDS.NAME:
			return endpoints.CHANGE_ISSUE_NAME;
		case ISSUE_FIELDS.DESCRIPTION:
			return endpoints.CHANGE_ISSUE_DESCRIPTION;
		case ISSUE_FIELDS.ASSIGNEE:
			return endpoints.CHANGE_ISSUE_ASSIGNEE;
		case ISSUE_FIELDS.ESTIMATION_USED:
			return endpoints.CHANGE_ISSUE_ESTIMATION_USED;
		default:
			return '';
	}
}

export const changeIssue = (issueDTO, field) => (dispatch) => {
	dispatch({
		[RSAA]: {
			endpoint: getChangeEndpoint(field),
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(issueDTO),
			types: [
				types.CHANGE_ISSUE_REQUEST,
				{
					type: types.CHANGE_ISSUE_SUCCESS,
					payload: (_, __, res) => {
						res.json()
							.then(issue => {
								dispatch(saveViewedIssue(issue));
							});
					},
				},
				types.CHANGE_ISSUE_FAIL,
			],
		},
	});
};
