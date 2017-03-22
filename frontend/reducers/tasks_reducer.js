import merge from 'lodash/merge';
import {
  RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  SELECT_TASK
} from '../actions/tasks_actions';

const _initial_state = {
  allTasks: {},
  selectedTask: {}
};

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      newState.allTasks = action.tasks;
      return newState;

    case RECEIVE_TASK:
      newState.allTasks[action.task.id] = action.task;
      return newState;

    case SELECT_TASK:
      newState.selectedTask = action.task;
      return newState;

    case REMOVE_TASK:
      delete (newState.allTasks[action.task.id]);
      return newState;
      
    default:
      return state;  
  }
}
