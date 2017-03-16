import merge from 'lodash/merge';
import {
  RECEIVE_TEAM,
  RECEIVE_TEAMS,
  REMOVE_TEAM
} from '../actions/teams_actions';

const _initial_state = {
  "0": {
    name: "",
    description: "",
    id: ""
  }
};

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      newState = action.teams;
      return newState;
    case RECEIVE_TEAM:
      newState[action.team.id] = action.team
      return newState;
    case REMOVE_TEAM:
      delete(newState[action.team.id]);
      return newState;
    default:
      return state
  }
}
