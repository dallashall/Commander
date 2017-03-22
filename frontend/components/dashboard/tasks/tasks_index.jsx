import React from 'react';
import TaskListItem from './task_list_item';

class TasksIndex extends React.Component {

  // componentDidMount() {
  //   if (this.props.currentProject.id) {
  //     this.props.fetchAllTasks(this.props.currentProject.id);
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentProject.id != nextProps.currentProject.id) {
      this.props.fetchAllTasks(nextProps.currentProject.id);
    }
  }
  render() {
    let {
      tasks,
      selectedTask,
      fetchAllTasks,
      updateTask,
      destroyTask,
      currentProject
    } = this.props;
    return (
      <div className="task-list">
        <ul>
          {tasks.map(task => <TaskListItem updateTask={updateTask} key={task.id} task={task} />)}
        </ul>
      </div>
    )
  };
}
export default TasksIndex;