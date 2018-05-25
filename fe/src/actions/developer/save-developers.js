import { SAVE_DEVELOPERS } from './types';

export const saveDevelopers = developers => ({
	type: SAVE_DEVELOPERS,
	payload: developers,
});
