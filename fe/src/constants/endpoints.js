export const AUTH_URL = 'http://localhost:4000/auth';
export const GET_ALL_PROJECTS_URL = 'http://localhost:4000/v1/project';
export const GET_PROJECT_URL = projectKey => `http://localhost:4000/v1/project/${projectKey}`;
export const GET_DEVELOPERS_WORKLOAD = developerId => `http://localhost:4000/v1/workload/developer/${developerId}`;
export const GET_PROJECT_BACKLOG = projectKey => `http://localhost:4000/v1/project/${projectKey}/backlog`;
export const GET_PROJECT_ACTIVE_SPRINT = projectKey => `http://localhost:4000/v1/project/${projectKey}/activeSprint`;
export const GET_SPRINTS_STORIES = sprintId => `http://localhost:4000/v1/sprint/${sprintId}/stories`;
export const GET_SPRINT = sprintId => `http://localhost:4000/v1/sprint/${sprintId}`;
export const CREATE_SPRINT = 'http://localhost:4000/v1/sprint';
export const GET_USER_STORY = storyKey => `http://localhost:4000/v1/userstory/${storyKey}`;
export const GET_STORIES_ISSUES = storyKey => `http://localhost:4000/v1/userstory/${storyKey}/issues`;
export const CHANGE_STORY_NAME = 'http://localhost:4000/v1/userstory/changeName';
export const CHANGE_STORY_DESCRIPTION = 'http://localhost:4000/v1/userstory/changeDescription';
export const GET_PROJECTS_DEVELOPERS = projectKey => `http://localhost:4000/v1/workload/project/${projectKey}`;
export const START_SPRINT = sprintId => `http://localhost:4000/v1/sprint/${sprintId}/startSprint`;
export const COMPLETE_SPRINT = sprintId => `http://localhost:4000/v1/sprint/${sprintId}/completeSprint`;
export const CHANGE_STORY_STATUS = 'http://localhost:4000/v1/userstory/changeStatus';
export const GET_PROJECTS_SPRINTS = projectKey => `http://localhost:4000/v1/project/${projectKey}/sprints`;
export const GET_DEVELOPER = developerId => `http://localhost:4000/v1/developer/${developerId}`;
export const GET_ISSUE = issueKey => `http://localhost:4000/v1/issue/${issueKey}`;
export const CHANGE_ISSUE_TYPE = `http://localhost:4000/v1/issue/changeType`;
export const CHANGE_ISSUE_STATUS = `http://localhost:4000/v1/issue/changeStatus`;
export const CHANGE_ISSUE_NAME = `http://localhost:4000/v1/issue/changeName`;
export const CHANGE_ISSUE_DESCRIPTION = `http://localhost:4000/v1/issue/changeDescription`;
export const CHANGE_ISSUE_ASSIGNEE = `http://localhost:4000/v1/issue/changeAssignee`;
export const CHANGE_ISSUE_ESTIMATION_USED = 'http://localhost:4000/v1/issue/logTime';
export const CREATE_USER_STORY = 'http://localhost:4000/v1/userstory';
export const CREATE_ISSUE = 'http://localhost:4000/v1/issue';
export const GET_PROJECTS_INCOMPLETE_SPRINTS = projectKey => `http://localhost:4000/v1/project/${projectKey}/incompleteSprints`;
export const CHANGE_STORY_SPRINT = 'http://localhost:4000/v1/userstory/changeSprint';
export const GET_DEVELOPERS = 'http://localhost:4000/v1/developer';
export const CREATE_WORKLOAD = 'http://localhost:4000/v1/workload';
export const DELETE_WORKLOAD = workloadId => `http://localhost:4000/v1/workload/${workloadId}`;
