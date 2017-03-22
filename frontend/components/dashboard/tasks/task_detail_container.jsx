import { connect } from 'react-redux';
import React from 'react';
import {
  fetchTask,
  destroyTask,
  updateTask,
  createTask
} from '../../../actions/tasks_actions';
import {
  fetchAllTaskAssignments,
  createTaskAssignment,
  removeTaskAssignment
} from '../../../actions/task_assignment_actions';
import TaskDetail from './task_detail';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let selectedTask = ownProps.type === "view" ||
    ownProps.type === "edit" ?
    state.tasks.selectedTask : { name: "", description: "", statuses: {} };
  return {
    teamMembers: state.teamMembers.teamMembers,
    currentProject: state.project.currentProject,
    selectedTask: selectedTask,
    taskAssignments: state.taskAssignments.fetchAllTaskAssignments,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTask: (taskId) => dispatch(fetchTask(taskId)),
  destroyTask: (taskId) => dispatch(destroyTask(taskId)),
  updateTask: (task) => dispatch(updateTask(task)),
  createTask: (task) => dispatch(createTask),
  fetchAllTaskAssignments: (taskId) => dispatch(fetchAllTaskAssignments(taskId)),
  createTaskAssignment: (taskAssignment) => dispatch(createTaskAssignment(taskAssignment)),
  removeTaskAssignment: (taskAssignmentId) => dispatch(removeTaskAssignment(taskAssignmentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
