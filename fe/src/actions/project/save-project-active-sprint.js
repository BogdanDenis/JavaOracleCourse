import { SAVE_PROJECT_ACTIVE_SPRINT } from './types';

export const saveProjectActiveSprint = sprint => ({
  type: SAVE_PROJECT_ACTIVE_SPRINT,
  payload: sprint,
});
