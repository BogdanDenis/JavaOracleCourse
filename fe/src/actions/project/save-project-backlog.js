import { SAVE_PROJECT_BACKLOG } from './types';

export const saveProjectBacklog = backlog => ({
  type: SAVE_PROJECT_BACKLOG,
  payload: backlog,
});
