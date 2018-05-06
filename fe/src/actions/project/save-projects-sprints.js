import { SAVE_PROJECTS_SPRINTS } from './types';

export const saveProjectsSprints = sprints => ({
  type: SAVE_PROJECTS_SPRINTS,
  payload: sprints,
});
