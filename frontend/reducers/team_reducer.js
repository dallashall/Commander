import merge from 'lodash/merge';
import {SET_TEAM, RESET_TEAM} from '../actions/team_actions';

const _initial_state = {
  id: "",
  name: "No Team Selected",
  description: "",
  owner: {
    username: "",
    id: ""
  }
};

export default (state = _initial_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case SET_TEAM:
      newState = action.team;
      return newState;
    case RESET_TEAM:
      return _initial_state;
    default:
      return state;
  }
}
