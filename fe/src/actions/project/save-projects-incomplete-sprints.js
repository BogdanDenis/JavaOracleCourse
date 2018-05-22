import { SAVE_PROJECTS_INCOMPLETE_SPRINTS } from './types';

export const saveProjectsIncompleteSprints = sprints => ({
	type: SAVE_PROJECTS_INCOMPLETE_SPRINTS,
	payload: sprints,
});
