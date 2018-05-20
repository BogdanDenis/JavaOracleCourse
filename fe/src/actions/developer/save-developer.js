import { SAVE_DEVELOPER } from './types';

export const saveDeveloper = developer => ({
	type: SAVE_DEVELOPER,
	payload: developer,
});
