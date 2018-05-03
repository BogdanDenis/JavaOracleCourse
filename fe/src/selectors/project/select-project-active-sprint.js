export const selectProjectActiveSprint = (state) => {
  const { viewed } = state.projects;
  if (!viewed) {
    return;
  }
  return viewed.sprint;
};
