import React from 'react';
import AssignedTasksIndex from './assigned_tasks_index';
import { connect } from 'react-redux';
import values from 'lodash/values';
import {
  updateAssignedTask,
  fetchAssignedTasks,
  setSelectedTask
} from '../../../actions/tasks_actions';
import {
  fetchAllTaskAssignments
} from '../../../actions/task_assignment_actions';
import {
  setCurrentProject
} from '../../../actions/project_actions';
import {
  fetchTeam
} from '../../../actions/teams_actions';

const mapStateToProps = (state, ownProps) => ({
  tasks: values(state.tasks.assignedTasks),
  selectedTask: state.tasks.selectedTask
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAssignedTasks: () => dispatch(fetchAssignedTasks()),
  updateAssignedTask: (task) => dispatch(updateAssignedTask(task)),
  setSelectedTask: (taskId) => dispatch(setSelectedTask(taskId)),
  setCurrentProject: (projectId) => dispatch(setCurrentProject(projectId)),
  fetchAllTaskAssignments: (taskId) => dispatch(fetchAllTaskAssignments(taskId)),
  selectTeam: (teamId) => dispatch(fetchTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignedTasksIndex);