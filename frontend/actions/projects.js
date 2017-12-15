import { 
  getToApi,
  deleteToApi,
  patchToApi,
  postToApi,
} from '../util/api_util';
import { action } from '../util/action';
 
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const createProject = formProject => dispatch => (
  postToApi('/projects', formProject)
    .then(payload => dispatch(action(RECEIVE_SINGLE_PROJECT, payload)))
    .catch(errors => dispatch(action(RECEIVE_PROJECT_ERRORS, errors)))
);

export const updateProject = formProject => dispatch => (
  patchToApi(`/projects/${formProject.id}`, formProject)
    .then(payload => dispatch(action(RECEIVE_SINGLE_PROJECT, payload)))
    .catch(errors => dispatch(action(RECEIVE_PROJECT_ERRORS, errors)))
);

export const fetchProject = projectId => dispatch => (
  getToApi(`/projects/${projectId}`)
    .then(payload => dispatch(action(RECEIVE_SINGLE_PROJECT, payload)))
    .catch(errors => dispatch(action(RECEIVE_PROJECT_ERRORS, errors)))
);

export const fetchTeamProjects = teamId => dispatch => (
  getToApi(`/teams/${teamId}/projects`)
    .then(payload => dispatch(action(RECEIVE_PROJECTS, payload)))
    .catch(errors => dispatch(action(RECEIVE_PROJECT_ERRORS, errors)))
);

export const deleteProject = projectId => dispatch => (
  deleteToApi(`/projects/${projectId}`)
    .then(payload => dispatch(action(REMOVE_PROJECT, payload)))
    .catch(errors => dispatch(action(RECEIVE_PROJECT_ERRORS, errors)))
);
