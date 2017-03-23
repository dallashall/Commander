import React from 'react';
import merge from 'lodash/merge';

export default ({ task, updateTask, viewTask, editTask, newTask, setSelectedTask }) => {
  let newStatuses = merge({}, task.statuses) || {};
  let updatedTask = merge({}, task);
  const toggleStatus = (num) => (e) => {
    if (newStatuses[num]) {
      delete (newStatuses[num]);
    } else {
      newStatuses[num] = true;
    }
    updatedTask.statuses = Object.keys(newStatuses).length ? Object.keys(newStatuses) : [""];
    console.log (updatedTask.statuses)
    updateTask(updatedTask);
  }

  const view = (taskId) => (e) => {
    setSelectedTask(taskId).then(
      () => viewTask()
    );
  };
  let statuses = [1, 2, 3, 4].map(num => (
    <button
      key={num}  
      className={newStatuses[num] ? `status-${num}` : "status-blank"}
      onClick={toggleStatus(num)}></button>
  ));
  
  return (
    <li
      className="floating">
      <h4 className="flex flex-1" onClick={view(task.id)}>{task.name}</h4> <span>{statuses}</span></li>
  );
}