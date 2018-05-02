export const selectMyProjects = state => {
  const projects = state.projects.all;
  const workload = state.user.workload;
  return projects.filter((project) => {
    return workload.some(workloadItem => workloadItem.projectId === project.id);
  });
}