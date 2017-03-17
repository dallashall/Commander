import {getTeam} from '../util/teams_api_utils';
export const SET_TEAM = "SET_TEAM";

const receiveTeam = (team) => ({
  type: SET_TEAM,
  team
});

export const fetchSelectedTeam = (id) => (dispatch) => {
  return getTeam(id).then(
    team => dispatch(receiveTeam(team))
  );
};
