import {
  getToApi,
  deleteToApi,
  patchToApi,
  postToApi,
} from '../util/api_util';

export const RECEIVE_SINGLE_TASK = 'RECEIVE_SINGLE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

const receiveSingleTask = payload => ({
  type: RECEIVE_SINGLE_TASK,
  payload,
});

const receiveTasks = payload => ({
  type: RECEIVE_TASKS,
  payload,
});

const removeTask = payload => ({
  type: REMOVE_TASK,
  payload,
});

const receiveErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
})

export const createTask = formTask => dispatch => (
  postToApi('/tasks', formTask)
    .then(payload => dispatch(receiveSingleTask(payload)))
    .catch(errors => dispatch(receiveErrors(errors)))
);

export const updateTask = formTask => dispatch => (
  patctToApi(`/tasks/${formTask.id}`, formTask)
    .then(payload => dispatch(receiveSingleTask(payload)))
    .catch(errors => dispatch(receiveErrors(errors)))
);

export const fetchSingleTask = id => dispatch => (
  getToApi(`/tasks/${id}`)
    .then(payload => dispatch(receiveSingleTask(payload)))
    .catch(errors => dispatch(receiveErrors(errors)))
);

export const fetchProjectTasks = projectId => dispatch => (
  getToApi(`/projects/${projectId}/tasks`)
    .then(payload => dispatch(receiveTasks(payload)))
    .catch(errors => dispatch(receiveErrors(errors)))
);

export const deleteTask = taskId => dispatch => (
  getToApi(`/projects/${projectId}/tasks`)
    .then(payload => dispatch(receiveAllTasks(payload)))
    .catch(errors => dispatch(receiveErrors(errors)))
);
