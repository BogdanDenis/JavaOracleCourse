import { SAVE_STORIES_ISSUES } from './types';

export const saveStoriesIssues = (storyKey, issues) => ({
  type: SAVE_STORIES_ISSUES,
  payload: {
    storyKey,
    issues,
  },
});
