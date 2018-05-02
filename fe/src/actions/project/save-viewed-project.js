import { SAVE_VIEWED_PROJECT } from './types';

export const saveViewedProject = id => ({
  type: SAVE_VIEWED_PROJECT,
  payload: id,
});
