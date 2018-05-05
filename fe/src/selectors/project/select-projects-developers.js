export const selectProjectsDevelopers = (state) => {
  const { viewed } = state.projects;
  if (!viewed) {
    return [];
  }
  return viewed.developers;
}