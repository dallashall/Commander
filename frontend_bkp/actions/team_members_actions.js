import {
    getTeamMember,
    getTeamMembers,
    postTeamMember,
    deleteTeamMember
} from '../util/team_members_api_utils';

export const RECEIVE_TEAM_MEMBERS = "RECEIVE_TEAM_MEMBERS";
export const RECEIVE_TEAM_MEMBER = 'RECEIVE_TEAM_MEMBER';
export const REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_TEAM_MEMBERS = 'RESET_TEAM_MEMBERS';

const receiveTeamMembers = (teamMembers) => ({
    type: RECEIVE_TEAM_MEMBERS,
    teamMembers
});

const receiveTeamMember = (teamMember) => ({
    type: RECEIVE_TEAM_MEMBER,
    teamMember
});

const removeTeamMember = (id) => ({
    type: REMOVE_TEAM_MEMBER,
    id
});

const receiveErrors = (msg) => ({
    type: RECEIVE_ERRORS,
    msg
});

export const fetchTeamMembers = (teamId) => (dispatch) => {
    if (teamId) {
        return getTeamMembers(teamId).then(
            teamMembers => dispatch(receiveTeamMembers(teamMembers)),
            err => dispatch(receiveErrors(err))
        );
    } else {
        return dispatch(receiveTeamMembers({}));
    }
};

export const fetchTeamMember = (id) => (dispatch) => {
    return getTeamMember(id).then(
        teamMember => dispatch(receiveTeamMember(teamMember)),
        err => dispatch(receiveErrors(err))
    );
};

export const createTeamMember = (formTeamMember) => (dispatch) => {
    return postTeamMember(formTeamMember).then(
        teamMember => dispatch(receiveTeamMember(teamMember)),
        err => dispatch(receiveErrors(err))
    );
};

export const destroyTeamMember = (memberId, teamId) => (dispatch) => {
    return deleteTeamMember(memberId, teamId).then(
        (teamMember) => dispatch(removeTeamMember(teamMember.id)),
        err => dispatch(receiveErrors(err))
    );
};

export const resetTeamMembers = () => dispatch => {
    return dispatch(receiveTeamMembers({}));
}