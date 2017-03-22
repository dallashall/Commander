import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import {
  fetchAllTasks,
  fetchTask,
  createTask,
  updateTask,
  destroyTask,
  setSelectedTask
} from '../../../actions/tasks_actions';
import TasksIndex from './tasks_index';

const _initial_state = {
  tasks: {
    allTasks: {},
    selectedTask: {},
    currentProject: {}
  }
}

const mapStateToProps = (state = _initial_state, ownProps) => ({
  tasks: values(state.tasks.allTasks),
  selectedTask: state.tasks.selectedTask,
  currentProject: state.project.currentProject
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllTasks: (projectId) => dispatch(fetchAllTasks(projectId)),
  fetchTask: (taskId) => dispatch(fetchTask(taskId)),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  destroyTask: (taskId) => dispatch(destroyTask(taskId)),
  setSelectedTask: (taskId) => dispatch(setSelectedTask(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
