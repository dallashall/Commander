import {
  getToApi,
  deleteToApi,
  patchToApi,
  postToApi,
} from '../util/api_util';
import { action } from '../util/action';

export const RECEIVE_SINGLE_TASK = 'RECEIVE_SINGLE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const createTask = formTask => dispatch => (
  postToApi('/tasks', formTask)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TASK, payload)))
    .catch(errors => dispatch(action(RECEIVE_TASK_ERRORS, errors)))
);

export const updateTask = formTask => dispatch => (
  patctToApi(`/tasks/${formTask.id}`, formTask)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TASK, payload)))
    .catch(errors => dispatch(action(RECEIVE_TASK_ERRORS, errors)))
);

export const fetchSingleTask = id => dispatch => (
  getToApi(`/tasks/${id}`)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TASK, payload)))
    .catch(errors => dispatch(action(RECEIVE_TASK_ERRORS, errors)))
);

export const fetchProjectTasks = projectId => dispatch => (
  getToApi(`/projects/${projectId}/tasks`)
    .then(payload => dispatch(action(RECEIVE_TASKS, payload)))
    .catch(errors => dispatch(action(RECEIVE_TASK_ERRORS, errors)))
);

export const deleteTask = taskId => dispatch => (
  getToApi(`/projects/${projectId}/tasks`)
    .then(payload => dispatch(action(REMOVE_TASK, payload)))
    .catch(errors => dispatch(action(RECEIVE_TASK_ERRORS, errors)))
);
