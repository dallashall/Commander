import {
  getToApi,
  deleteToApi,
  patchToApi,
  postToApi,
} from '../util/api_util';
import action from '../util/action';

export const RECEIVE_SINGLE_TEAM = 'RECEIVE_SINGLE_TEAM';
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';

export const createTeam = formTeam => dispatch => (
  postToApi('/teams', formTeam)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TEAM, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_ERRORS, errors)))
);

export const updateTeam = formTeam => dispatch => (
  patchToApi(`/teams/${formTeam.id}`, formTeam)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TEAM, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_ERRORS, errors)))
);

export const fetchTeam = teamId => dispatch => (
  getToApi(`/teams/${teamId}`)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TEAM, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_ERRORS, errors)))
);

export const fetchUserTeams = () => dispatch => (
  getToApi('/users/teams')
    .then(payload => dispatch(action(RECEIVE_TEAMS, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_ERRORS, errors)))
);

export const deleteTeam = teamId => dispatch => (
  deleteToApi(`/teams/${teamId}`, formTeam)
    .then(payload => dispatch(action(REMOVE_TEAM, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_ERRORS, errors)))
);
