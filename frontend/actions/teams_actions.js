import {
  getTeams,
  getTeam,
  postTeam,
  patchTeam,
  deleteTeam
} from '../util/teams_api_utils';
import {fetchSelectedTeam, resetSelectedTeam} from './team_actions';
import { fetchTeamMembers, resetTeamMembers } from './team_members_actions';
import { fetchAssignedTasks, receiveAssignedTasks } from './tasks_actions';

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

const removeTeam = (id) => ({
  type: REMOVE_TEAM,
  id
});

export const makeTeam = (formTeam) => (dispatch) => {
  return postTeam(formTeam).then(
    team => {
      dispatch(receiveTeam(team));
      dispatch(fetchSelectedTeam(team.id));
      dispatch(fetchTeamMembers(team.id));
    }
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
    team => {
      dispatch(receiveTeam(team));
      dispatch(fetchSelectedTeam(team.id));
    }
  );
};

export const destroyTeam = (id) => (dispatch) => {
  return deleteTeam(id)
    .then(msg => dispatch(removeTeam(id)))
    .then(() => dispatch(resetSelectedTeam()))
    .then(() => dispatch(resetTeamMembers()))
    .then(() => dispatch(fetchAssignedTasks()))
    .then(res => receiveAssignedTasks(res));
};
