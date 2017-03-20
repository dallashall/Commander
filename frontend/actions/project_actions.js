import {
  getAllProjects,
  getTeamProjects,
  getProject,
  deleteProject,
  patchProject,
  postProject
} from '../util/projects_api_utils';
 
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_TEAM_PROJECTS = "RECEIVE_TEAM_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const SELECT_PROJECT = "SELECT_PROJECT";

const receiveAllProjects = (allProjects) => ({
  type: RECEIVE_ALL_PROJECTS,
  allProjects
});

const receiveTeamProjects = (teamProjects) => ({
  type: RECEIVE_TEAM_PROJECTS,
  teamProjects
});

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const selectProject = (projectId) => ({
  type: SELECT_PROJECT,
  projectId
});

const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId
});

// Call on willReceiveProps for team projects
export const fetchTeamProjects = (teamId) => (dispatch) => {
  return getTeamProjects(teamId).then(
    teamProjects => dispatch(receiveTeamProjects(teamProjects))
  );
};

export const fetchAllProjects = () => (dispatch) => {
  return getAllProjects().then(
    allProjects => dispatch(receiveAllProjects(allProjects))
  );
};

export const createProject = (project) => (dispatch) => {
  return postProject(project).then(
    project => dispatch(receiveProject(project))
  );
};

export const updateProject = (project) => (dispatch) => {
  return patchProject(project).then(
    project => dispatch(receiveProject(project))
  );
};

export const setCurrentProject = (projectId) => (dispatch) => {
  return getProject(projectId).then(
    project => dispatch(selectProject(project.id))
  );
};

export const destroyProject = (projectId) => (dispatch) => {
  return deleteProject(projectId).then(
    project => dispatch(removeProject(project.id))
  );
};
