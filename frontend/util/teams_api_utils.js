export const getTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams'
  });
};

export const getTeam = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/team/${id}`
  });
};

export const postTeam = (team) => {
   return $.ajax({
     method: 'POST',
     url: '/api/teams',
     data: team
   });
};

export const patchTeam = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${team.id}`
  });
};

export const deleteTeam = (team) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/teams/${team.id}`
  });
};
