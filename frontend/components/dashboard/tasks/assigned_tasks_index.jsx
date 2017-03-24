import React from 'react';
import TaskListItem from './task_list_item';
import { hashHistory } from 'react-router';

class AssignedTasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.viewTask = this.viewTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchAssignedTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tasks.length != nextProps.tasks.length) {
      this.setState(nextProps.tasks);
    }
  }

  viewTask() {
    let { selectedTask } = this.props;
    this.props.selectTeam(selectedTask.team_id).then(
      () => this.props.setCurrentProject(selectedTask.project_id)
    ).then(
      () => this.props.fetchAllTaskAssignments(selectedTask.id)
      ).then(
      () => hashHistory.push(`/dashboard/task/${selectedTask.id}`)
    );
  }
  

  render() {
    let {
      updateAssignedTask,
      setSelectedTask,
      fetchAllTaskAssignments,
      tasks
    } = this.props;

    return (
      <div className="flex flex-1">
        <div className="box white floating left-panel full-height flex col flex-half-single">  
          <div className="task-list">
            <span className="flex-between task-header"><h3>Tasks Assigned to Me:</h3>Click on a Task's Name for Details</span>
            <ul>
              {tasks.map(task => (
                <TaskListItem
                  updateTask={updateAssignedTask}
                  key={task.id}
                  task={task}
                  viewTask={this.viewTask}
                  setSelectedTask={setSelectedTask}
                  fetchAllTaskAssignments={fetchAllTaskAssignments}
                />)
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignedTasksIndex;