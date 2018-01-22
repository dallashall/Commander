import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  REMOVE_USER,
} from '../actions/session/session_actions';

const initialState = {
  currentUser: false,
  errors: [],
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default SessionReducer;
