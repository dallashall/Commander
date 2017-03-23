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
      currentProject,
      editTask,
      newTask,
      viewTask,
      closeTask,
      setSelectedTask
    } = this.props;
    return (
      <div className="task-list">
      <span className="flex-between task-header"><h3>Tasks:</h3>Click on a Task's Name for Details</span>
        <ul>
          <li className="floating new-task-button" onClick={newTask}><h4>Create New Task</h4><i className="fa fa-plus fa-fw" /></li>  
          {tasks.map(task => (
            <TaskListItem
              updateTask={updateTask}
              key={task.id}
              task={task}
              editTask={editTask}
              newTask={newTask}
              viewTask={viewTask}
              closeTask={closeTask}
              setSelectedTask={setSelectedTask}
            />)
          )}
        </ul>
      </div>
    )
  };
}
export default TasksIndex;