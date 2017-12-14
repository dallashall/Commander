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
  },
  selected_team: {
    name: "",
    description: "",
    id: "",
    owner: {
      username: "",
      id: ""
    }
  }
};

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TEAMS:
      newState = merge({}, state);
      newState.teams = action.teams.teams;
      newState.my_teams = action.teams.my_teams;
      return newState;
    case RECEIVE_TEAM:
      newState = merge({}, state);
      if (!newState.my_teams) {
        newState.my_teams = {};
      }
      newState.my_teams[action.team.id] = action.team;
      newState.selected_team = action.team;
      return newState;
    case REMOVE_TEAM:
      newState = merge({}, state);
      delete(newState.my_teams[action.id]);
      newState.selected_team = _initial_state.selected_team;
      return newState;
    default:
      return state
  }
}
