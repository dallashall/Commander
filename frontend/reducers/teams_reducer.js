import merge from 'lodash/merge';
import {
  RECEIVE_TEAM,
  RECEIVE_TEAMS,
  REMOVE_TEAM
} from '../actions/teams_actions';

const _initial_state = {
  teams: {}
}

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      newState.teams = action.teams;
      return newState;
    case RECEIVE_TEAM:
      newState.teams[action.team.id] = action.team
      return newState;
    case REMOVE_TEAM:
      delete(newState.teams[action.team.id]);
      return newState;
    default:
      return state
  }
}
