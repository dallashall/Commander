export const getTaskAssignments = (taskId) => (
  $.ajax({
    method: 'GET',
    url: '/api/task_assignments',
    data: {
      task_assignment: {
        task_id: taskId
      }
    }
  })
);

export const getUserTaskAssignments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users/task_assignments'
  })
);

export const getTaskAssignment = (taskAssignmentId) => (
  $.ajax({
    method: 'GET',
    url: `/api/task_assignments/${taskAssignmentId}`
  })
);

export const postTaskAssignment = (task_assignment) => (
  $.ajax({
    method: 'POST',
    url: `/api/task_assignments/`,
    data: { task_assignment }
  })
);

export const patchTaskAssignment = (task_assignment) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/task_assignments/${task_assignment.id}`,
    data: { task_assignment }
  })
);

export const deleteTaskAssignment = (taskAssignmentId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/task_assignments/${taskAssignmentId}`
  })
);