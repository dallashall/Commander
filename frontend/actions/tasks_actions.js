import {
    getAllTasks,
    getTask,
    postTask,
    patchTask,
    deleteTask
} from '../util/tasks_api_utils';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SELECT_TASK = "SELECT_TASK";

const receiveAllTasks = (tasks) => ({
    type: RECEIVE_ALL_TASKS,
    tasks
});

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
});

const removeTask = (task) => ({
    type: REMOVE_TASK,
    task
});

const selectTask = (task) => ({
    type: SELECT_TASK,
    task
});

export const fetchAllTasks = (projectId) => (dispatch) => {
    return getAllTasks(projectId).then(
        tasks => dispatch(receiveAllTasks(tasks))
    );
};

export const fetchTask = (taskId) => (dispatch) => {
    return getTask(taskId).then(
        task => dispatch(receiveTask(task))
    );
};

export const createTask = (formTask) => (dispatch) => {
    return postTask(formTask).then(
        task => dispatch(receiveTask(task))
    );
};

export const updateTask = (formTask) => (dispatch) => {
    return patchTask(formTask).then(
        task => dispatch(receiveTask(task))
    );
};

export const destroyTask = (taskId) => (dispatch) => {
    return deleteTask(taskId).then(
        task => dispatch(removeTask(task))
    );
};

export const setSelectedTask = (taskId) => (dispatch) => {
    return getTask(taskId).then(
        task => dispatch(selectTask(task))
    );
};