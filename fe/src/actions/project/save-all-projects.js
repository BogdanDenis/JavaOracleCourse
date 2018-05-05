import { SAVE_ALL_PROJECTS } from './types';

export const saveAllProjects = projects => ({
  type: SAVE_ALL_PROJECTS,
  payload: projects,
});
