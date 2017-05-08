import merge from 'lodash/merge';
import {
  RECEIVE_TEAM,
  RECEIVE_TEAMS,
  REMOVE_TEAM
} from '../actions/teams_actions';

const _initial_state = {
  teams: {
    "0": {
      name: "",
      description: "",
      id: "",
      owner: {
        username: "",
        id: ""
      }
    }
  },
  my_teams: {
    "0": {
      name: "",
      description: "",
      id: "",
      owner: {
        username: "",
        id: ""
      }
    }
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
      if (!newState.my_teams) {
        newState.my_teams = {};
      }
      newState.my_teams[action.team.id] = action.team;
      return newState;
    case REMOVE_TEAM:
      delete(newState.my_teams[action.id]);
      return newState;
    default:
      return state
  }
}
