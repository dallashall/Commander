import {
  getToApi,
  deleteToApi,
  postToApi,
} from '../util/api_util';
import { action } from '../util/action';

export const RECEIVE_SINGLE_TEAM_MEMBER = 'RECEIVE_SINGLE_TEAM_MEMBER';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';
export const REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER';
export const RECEIVE_TEAM_MEMBER_ERRORS = 'RECEIVE_TEAM_MEMBER_ERRORS';

export const createTeamMember = formTeamMember => dispatch => (
  postToApi('/teamMembers', formTeamMember)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TEAM_MEMBER, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_MEMBER_ERRORS, errors)))
);

export const fetchSingleTeamMember = id => dispatch => (
  getToApi(`/teamMembers/${id}`)
    .then(payload => dispatch(action(RECEIVE_SINGLE_TEAM_MEMBER, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_MEMBER_ERRORS, errors)))
);

export const fetchTeamMembers = teamId => dispatch => (
  getToApi(`/teams/${teamId}/teamMembers`)
    .then(payload => dispatch(action(RECEIVE_TEAM_MEMBERS, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_MEMBER_ERRORS, errors)))
);

export const deleteTeamMember = formTeamMember => dispatch => (
  deleteToApi(`/teamMembers`, formTeamMember)
    .then(payload => dispatch(action(REMOVE_TEAM_MEMBER, payload)))
    .catch(errors => dispatch(action(RECEIVE_TEAM_MEMBER_ERRORS, errors)))
);
