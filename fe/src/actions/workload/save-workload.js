import { SAVE_DEVELOPERS_WORKLOAD } from './types';

export const saveWorkload = (developerId, workload) => ({
  type: SAVE_DEVELOPERS_WORKLOAD,
  payload: {
    id: developerId,
    workload,
  },
});
