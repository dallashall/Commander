import {getTeam} from '../util/teams_api_utils';
export const SET_TEAM = "SET_TEAM";
export const RESET_TEAM = "RESET_TEAM";

const receiveTeam = (team) => ({
  type: SET_TEAM,
  team
});

const resetTeam = () => ({
  type: RESET_TEAM
});

export const fetchSelectedTeam = (id) => (dispatch) => {
  return getTeam(id).then(
    team => dispatch(receiveTeam(team))
  );
};

export const resetSelectedTeam = () => (dispatch) => {
  console.log('resetting')
  return dispatch(resetTeam());
}
