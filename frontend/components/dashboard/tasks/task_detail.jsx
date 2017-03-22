import React from 'react';
import merge from 'lodash/merge';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.selectedTask)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id != nextProps.selectedTask.id) {
      this.setState(nextProps.selectedTask);
    }
  }

  handleChange() {
    
  }

  handleSubmit() {

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

    let formTitle, body, deleteButton, submitText, single;

    if (type === "view") {
      formTitle = "Details";
      body = (
        <div>
          <button className="btn btn-float" onClick={editTask}>Edit</button>  
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
        <div className="edit-form col">
          <div className="flex flex-between flex-v-center">
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