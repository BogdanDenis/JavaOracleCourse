export const selectProjectBacklog = (state) => {
  const { viewed } = state.projects;
  if (!viewed) {
    return;
  }

  return viewed.backlog;
};
