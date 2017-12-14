import merge from 'lodash/merge';
import {
  RECEIVE_ALL_TASK_ASSIGNMENTS,
  RECEIVE_TASK_ASSIGNMENT,
  RECEIVE_USER_TASK_ASSIGNMENTS,
  REMOVE_TASK_ASSIGNMENT
} from '../actions/task_assignment_actions';

const _initial_state = {
  allTaskAssignments: {},
  userTaskAssignments: {}
};

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TASK_ASSIGNMENTS:
      newState.allTaskAssignments = action.allTaskAssignments;
      return newState;

    case RECEIVE_USER_TASK_ASSIGNMENTS:
      newState.allTaskAssignments = action.userTaskAssignments;
      return newState

    case RECEIVE_TASK_ASSIGNMENT:
      let id = action.taskAssignment.id;
      newState.allTaskAssignments[id] = action.taskAssignment;
      return newState;
    
    case REMOVE_TASK_ASSIGNMENT:
      delete (newState.allTaskAssignments[action.taskAssignment.id]);
      return newState;
    default:
      return state;
  }
}