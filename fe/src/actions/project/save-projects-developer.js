import { SAVE_PROJECTS_DEVELOPER } from './types';

export const saveProjectsDeveloper = developer => ({
  type: SAVE_PROJECTS_DEVELOPER,
  payload: developer,
});
