export const GET_ALL_PROJECTS_URL = 'http://localhost:4000/v1/project';
export const GET_PROJECT_URL = projectKey => `http://localhost:4000/v1/project/${projectKey}`;
export const GET_DEVELOPERS_WORKLOAD = developerId => `http://localhost:4000/v1/workload/developer/${developerId}`;
export const GET_PROJECT_BACKLOG = projectKey => `http://localhost:4000/v1/project/${projectKey}/backlog`;
export const GET_PROJECT_ACTIVE_SPRINT = projectKey => `http://localhost:4000/v1/project/${projectKey}/activeSprint`;
export const GET_SPRINTS_STORIES = sprintId => `http://localhost:4000/v1/sprint/${sprintId}/stories`;
export const CREATE_SPRINT = 'http://localhost:4000/v1/sprint';
export const GET_USER_STORY = storyKey => `http://localhost:4000/v1/userstory/${storyKey}`;
export const GET_STORIES_ISSUES = storyKey => `http://localhost:4000/v1/userstory/${storyKey}/issues`;
export const CHANGE_STORY_NAME = 'http://localhost:4000/v1/userstory/changeName';
export const CHANGE_STORY_DESCRIPTION = 'http://localhost:4000/v1/userstory/changeDescription';
export const GET_PROJECTS_DEVELOPERS = projectKey => `http://localhost:4000/v1/workload/project/${projectKey}`;
export const COMPLETE_SPRINT = sprintId => `http://localhost:4000/v1/sprint/${sprintId}/completeSprint`;
export const CHANGE_STORY_STATUS = 'http://localhost:4000/v1/userstory/changeStatus';
export const GET_PROJECTS_SPRINTS = projectKey => `http://localhost:4000/v1/project/${projectKey}/sprints`;
