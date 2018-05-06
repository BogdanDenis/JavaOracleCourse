import { saveViewedProject } from './save-viewed-project';

export const setViewedProjectByStory = storyKey => (dispatch, getState) => {
  const state = getState();
  const projects = state.projects.all;
};
