import React from 'react';
import { connect } from 'react-redux';
import {
  fetchAllTasks,
  fetchTask,
  createTask,
  updateTask,
  destroyTask
} from '../../../actions/tasks_actions';
import TasksIndex from './tasks_index';

const _initial_state = {
  tasks: {
    allTasks: {},
    selectedTask: {}
  }
}

const mapStateToProps = (state = _initial_state, ownProps) => ({
  tasks: state.tasks.allTasks,
  selectedTask: state.tasks.selectedTask
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  fetchTask: (taskId) => dispatch(fetchTask(taskId)),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask),
  destroyTask: (taskId) => dispatch(destroyTask(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
