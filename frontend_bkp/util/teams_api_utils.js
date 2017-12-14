export const getTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams'
  });
};

export const getTeam = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${id}`
  });
};

export const postTeam = (team) => {
   return $.ajax({
     method: 'POST',
     url: '/api/teams',
     data: {team}
   });
};

export const patchTeam = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${team.id}`,
    data: {team}
  });
};

export const deleteTeam = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/teams/${id}`
  });
};
