import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  REMOVE_USER
} from '../actions/session/session_actions';

const _initialState = {
  currentUser: undefined,
  errors: []
}

const SessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
    case REMOVE_USER:
      newState.currentUser = undefined;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer;