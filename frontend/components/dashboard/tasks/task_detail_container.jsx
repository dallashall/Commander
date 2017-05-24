import { connect } from 'react-redux';
import React from 'react';
import {
  destroyTask,
  updateTask,
  createTask,
  setSelectedTask,
  resetSelectedTask
} from '../../../actions/tasks_actions';
import TaskDetail from './task_detail';

const mapStateToProps = (state, ownProps) => {
  let selectedTask = ownProps.type === "view" ||
    ownProps.type === "edit" ?
    state.tasks.selectedTask : { name: "", description: "", statuses: "", id: undefined };
  return {
    currentProject: state.project.currentProject,
    selectedTask: selectedTask
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formAction = ownProps.type === "edit" ? updateTask : createTask;
  return {
    destroyTask: (taskId) => dispatch(destroyTask(taskId)),
    updateTask: (task) => dispatch(updateTask(task)),
    createTask: (task) => dispatch(createTask),
    setSelectedTask: (task) => dispatch(setSelectedTask(task)),
    resetSelectedTask: () => dispatch(resetSelectedTask()),
    formAction: (task) => dispatch(formAction(task)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
