export const getProject = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/projects/${id}`
  })
);

export const getAllProjects = () => (
  $.ajax({
    method: "GET",
    url: '/api/projects'
  })
);

export const getTeamProjects = (teamId) => {
  if (teamId) {
    return $.ajax({
      method: "GET",
      url: `/api/teams/${teamId}/projects`
    })
  } else {
    return;
  }  
};

export const patchProject = (project) => (
  $.ajax({
    method: "PATCH",
    url: '/api/projects',
    data: { project }
  })
);

export const postProject = (project) => (
  $.ajax({
    method: "POST",
    url: '/api/projects',
    data: { project }
  })
);

export const deleteProject = (projectId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/projects/:id`
  })
);