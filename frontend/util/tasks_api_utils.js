export const getAllTasks = (projectId) => (
  $.ajax({
    method: 'GET',
    url: '/api/tasks',
    data: {
      task: {
        project_id: projectId
      }
    }
  })
);

export const getTask = (taskId) => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${taskId}`
  })
);

export const postTask = (task) => (
  $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  })
);

export const patchTask = (task) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/task/${task.id}`,
    data: {task}
  })
);

export const deleteTask = (taskId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/task/${taskId}`
  })
);
