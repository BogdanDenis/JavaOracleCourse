export const selectViewedProject = (state) => {
  const { viewed } = state.projects;
  if (!viewed) {
    return;
  }
  return viewed;
};
