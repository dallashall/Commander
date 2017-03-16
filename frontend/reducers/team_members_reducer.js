import merge from 'lodash/merge';
import {
  RECEIVE_TEAM_MEMBERS,
  RECEIVE_TEAM_MEMBER,
  REMOVE_TEAM_MEMBER,
  RECEIVE_ERRORS
} from '../actions/team_members_actions';

const _initial_state = {
  errors: [],
  teamMembers: {}
}

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, action);
  switch (action.type) {
    case RECEIVE_TEAM_MEMBERS:
      newState = action.teamMembers;
      newState.errors = [];
      return newState;
    case RECEIVE_TEAM_MEMBER:
      newState[action.teamMember.id] = action.teamMember;
      newState.errors = [];
      return newState;
    case REMOVE_TEAM_MEMBER:
      delete(newState[action.id])
      newState.errors = [];
      return newState;
    default:
      return state;
  }
}
