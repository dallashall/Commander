import React from 'react';
import merge from 'lodash/merge';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.selectedTask)
    this.toggleStatus = this.toggleStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id != nextProps.selectedTask.id || this.state.status != nextProps.selectedTask.status) {
      this.setState(nextProps.selectedTask);
    }
  }

  handleChange(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.project_id = this.props.currentProject.id;
    this.props.formAction(this.state).then(
      () => this.props.viewTask()
    );
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.destroyTask(this.state.id).then(
      this.props.closeTask()
    );
  };

  toggleStatus(num) {
    let newStatus = this.state.status;
    let updatedTask = merge({}, this.state);
    return (e) => {
      if (newStatus === num) {
        return;
      } else {
        newStatus = num;
      }
      updatedTask.status = newStatus;
      this.props.updateTask(updatedTask);
    }
  }  

  render() {
    let {
      type,
      teamMembers,
      currentProject,
      selectedTask,
      taskAssignments,
      currentUser,
      fetchTask,
      destroyTask,
      editTask,
      updateTask,
      createTask,
      closeTask,
      fetchAllTaskAssignments,
      createTaskAssignment,
      removeTaskAssignment
    } = this.props;

    let formTitle, body, deleteButton, submitText, single, statuses;
    const statusNames = {
      1: "Not Started",
      2: "In-Progress (Problems)",
      3: "In-Progress",
      4: "Completed"
    }
    statuses = [1, 2, 3, 4].map(num => (
    <li key={num}><button  
      className={this.state.status === num ? `status-${num}` : `status-blank-${num}`}
      onClick={this.toggleStatus(num)}></button> <h4>{statusNames[num]}</h4></li>
    ));

    if (type === "view") {
      formTitle = selectedTask.name;
      body = (
        <div>
          <div className="flex row flex-between"><span className="flex row">Status: <ul>{statuses}</ul></span><button className="btn btn-float task-edit" onClick={editTask}>Edit</button></div>
          <h4>Description:</h4>
          <p>{selectedTask.description}</p>
        </div>
      );
    } else {
      if (this.state.id){
        deleteButton = <button onClick={this.handleDelete} className="btn-float flex-1 center-flex-content delete red" >Delete</button>;
        formTitle = `Edit ${selectedTask.name}`;
        submitText = "Save Changes";
        single = "";
      } else {
        formTitle = "New Task";
        submitText = "Create Task";
        single = "btn-single ";
      }
      body = (
        <form>
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange('name')} />

          <textarea
            value={`${this.state.description}`}
            placeholder="Description"
            onChange={this.handleChange('description')} />

          <div className="flex row">
            {deleteButton}
            <input className={`btn-float ${single}flex-1 center-flex-content`} type="submit" value={submitText} onClick={this.handleSubmit} />
          </div>
        </form>
      );
    }
    return (
      <div className="box white floating left-panel full-height flex col flex-half-single">
        <div className="edit-form task-detail col">
          <div className="flex flex-between flex-v-center form-title">
            <h3>{formTitle}</h3>
            <button
              onClick={closeTask}
              className="btn-float btn-single center-flex-content">
              <i className="fa fa-times fa-fw fa-lg"></i>
            </button>
          </div>
          {body}
        </div>
      </div>
    );
  }
}

export default TaskDetail;