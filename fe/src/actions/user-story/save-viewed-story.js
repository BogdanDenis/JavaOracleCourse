import { SAVE_VIEWED_STORY } from './types';

export const saveViewedStory = story => ({
  type: SAVE_VIEWED_STORY,
  payload: story,
});
