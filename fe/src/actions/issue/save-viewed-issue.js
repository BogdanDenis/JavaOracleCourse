import { SAVE_VIEWED_ISSUE } from './types';

export const saveViewedIssue = issue => ({
	type: SAVE_VIEWED_ISSUE,
	payload: issue,
});
