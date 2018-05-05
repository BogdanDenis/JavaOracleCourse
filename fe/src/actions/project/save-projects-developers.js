import { SAVE_PROJECTS_DEVELOPERS } from './types';

export const saveProjectsDevelopers = developers => ({
  type: SAVE_PROJECTS_DEVELOPERS,
  payload: developers,
});
