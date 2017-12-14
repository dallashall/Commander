export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const postUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  });
};

export const patchUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  });
};

export const deleteUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${id}`
  });
};

export const postSession = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  });
};

export const deleteSession = () => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/session`
  });
};