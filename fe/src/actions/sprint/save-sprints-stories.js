import { SAVE_SPRINTS_STORIES } from './types';

export const saveSprintsStories = (sprintId, stories) => ({
  type: SAVE_SPRINTS_STORIES,
  payload: {
    sprintId,
    stories
  },
});
