import {
  getTeams,
  getTeam,
  postTeam,
  patchTeam,
  deleteTeam
} from '../util/teams_api_utils';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

const receiveTeam = (team) => ({
  type: RECEIVE_TEAM,
  team
});

const receiveTeams = (teams) => ({
  type: RECEIVE_TEAMS,
  teams
});

const removeTeam = (team) => ({
  type: REMOVE_TEAM,
  team
});

export const makeTeam = (formTeam) => (dispatch) => {
  return postTeam(formTeam).then(
    team => dispatch(receiveTeam(team))
  );
};

export const fetchTeams = () => (dispatch) => {
  return getTeams().then(
    teams => dispatch(receiveTeams(teams))
  );
};

export const fetchTeam = (id) => (dispatch) => {
  return getTeam(id).the(
    team => dispatch(receiveTeam(team))
  );
};

export const modifyTeam = (formTeam) => (dispatch) => {
  return patchTeam(formTeam).then(
    team => dispatch(receiveTeam(team))
  );
};

export const destroyTeam = (id) => (dispatch) => {
  return deleteTeam(id)
};
