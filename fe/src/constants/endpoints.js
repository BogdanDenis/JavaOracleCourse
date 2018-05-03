export const GET_ALL_PROJECTS_URL = 'http://localhost:8080/v1/project';
export const GET_PROJECT_URL = projectKey => `http://localhost:8080/v1/project/${projectKey}`;
export const GET_DEVELOPERS_WORKLOAD = developerId => `http://localhost:8080/v1/workload/developer/${developerId}`;
export const GET_PROJECT_BACKLOG = projectKey => `http://localhost:8080/v1/project/${projectKey}/backlog`;
export const GET_PROJECT_ACTIVE_SPRINT = projectKey => `http://localhost:8080/v1/project/${projectKey}/activeSprint`;
export const GET_SPRINTS_STORIES = sprintId => `http://localhost:8080/v1/sprint/${sprintId}/stories`;
