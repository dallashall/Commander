export const getTeamMembers = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/team_members',
    data: {teamId}
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
    data: {teamMember}
  });
};

export const deleteTeamMember = (teamMember) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/team_members/${teamMember.id}`
  });
};