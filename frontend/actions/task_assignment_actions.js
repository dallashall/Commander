import { 
  getTaskAssignments,
  getUserTaskAssignments,
  getTaskAssignment,
  postTaskAssignment,
  patchTaskAssignment,
  deleteTaskAssignment
 } from '../util/task_assignments_api_utils';

export const RECEIVE_ALL_TASK_ASSIGNMENTS = "RECEIVE_ALL_TASK_ASSIGNMENTS";
export const RECEIVE_USER_TASK_ASSIGNMENTS = "RECEIVE_USER_TASK_ASSIGNMENTS";
export const RECEIVE_TASK_ASSIGNMENT = "RECEIVE_TASK_ASSIGNMENT";
export const REMOVE_TASK_ASSIGNMENT = "REMOVE_TASK_ASSIGNMENT";

const receiveAllTaskAssignments = (allTaskAssignments) => ({
  type: RECEIVE_ALL_TASK_ASSIGNMENTS,
  allTaskAssignments
});

const receiveUserTaskAssignments = (userTaskAssignments) => ({
  type: RECEIVE_USER_TASK_ASSIGNMENTS,
  userTaskAssignments
});

const receiveTaskAssignment = (taskAssignment) => ({
  type: RECEIVE_TASK_ASSIGNMENT,
  taskAssignment
});

export const fetchAllTaskAssignments = (taskId) => (dispatch) => {
  return getTaskAssignments(taskId).then(
    allTaskAssignments => dispatch(receiveAllTaskAssignments(allTaskAssignments))
  );
};

export const fetchUserTaskAssignments = () => (dispatch) => {
  return getUserTaskAssignments().then(
    userTaskAssignments => dispatch(receiveUserTaskAssignments(userTaskAssignments))
  );
};

export const fetchTaskAssignment = (taskAssignmentId) => (dispatch) => {
  return getTaskAssignment(taskAssignmentId).then(
    taskAssignment => dispatch(receiveTaskAssignment(taskAssignment))
  );
};

export const createTaskAssignment = (taskAssignment) => (dispatch) => {
  return postTaskAssignment(taskAssignment).then(
    taskAssignment => dispatch(receiveTaskAssignment(taskAssignment))
  );
};

export const updateTaskAssignment = (formTaskAssignment) => (dispatch) => {
  return patchTaskAssignment(formTaskAssignment).then(
    taskAssignment => dispatch(receiveTaskAssignment(taskAssignment))
  );
};

export const removeTaskAssignment = (taskAssignmentId) => (dispatch) => {
  return deleteTaskAssignment(taskAssignmentId).then(
    taskAssignment => dispatch(removeTaskAssignment(taskAssignment))
  );
};