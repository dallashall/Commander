export const getTeamMembers = (teamId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/team_members',
        data: { teamId }
    });
}

export const getTeamMember = (teamMemberId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/team_members/${teamMemberId}`
    });
};

export const postTeamMember = (teamMember) => {
    return $.ajax({
        method: 'POST',
        url: '/api/team_members',
        data: { teamMember }
    });
};

export const deleteTeamMember = (memberId, teamId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/team_members/`,
        data: {
            teamMember: {
                user_id: memberId,
                team_id: teamId
            }
        }
    });
};