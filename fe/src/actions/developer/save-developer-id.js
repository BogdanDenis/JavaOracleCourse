import { SAVE_DEVELOPER_ID } from './types';

export const saveDeveloperId = id => ({
	type: SAVE_DEVELOPER_ID,
	payload: id,
});
