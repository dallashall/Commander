import React from 'react';

class TaskAssignmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAssign = this.handleAssign.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.assignOrRemove = this.assignOrRemove.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleAssign(userId) {
    return (e) => {
      this.props.createTaskAssignment({
        user_id: userId,
        task_id: this.props.taskId
      });
    }
  }

  handleRemove(assignmentId) {
    return (e) => {
      this.props.removeTaskAssignment(assignmentId);
    }
  }

  assignOrRemove(userId) {
    let action, text, cssProp, isAssigned;
    let button;
    this.props.assignmentIds.forEach(assignment => {
      if (assignment[userId]) {
        action = this.handleRemove(assignment[userId]);
        text = "Remove Assignment";
        cssProp = "red";
        isAssigned = true;
      }
    });
    if (!isAssigned) {
      action = this.handleAssign(userId);
      text = "Assign";
      cssProp = "";
    }
    button = (<button className={`btn btn-float ${cssProp}`} onClick={action}>{text}</button>);
    return button;
  }

  render() {
    return (
      <div className="assigneeForm">
        <ul>
          {this.props.teamMembers.map((teamMember, idx) => <li key={idx}><strong>{teamMember.username}</strong>{this.assignOrRemove(teamMember.user_id)}</li>)}
        </ul>  
      </div>
    );
  }
}

export default TaskAssignmentForm;