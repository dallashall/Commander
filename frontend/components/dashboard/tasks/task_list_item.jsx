import React from 'react';
import merge from 'lodash/merge';

export default ({ task, updateTask }) => {
  let newStatuses = merge({}, task.statuses);
  let updatedTask = merge({}, task);
  const toggleStatus = (num) => (e) => {
    if (newStatuses[num]) {
      delete (newStatuses[num]);
    } else {
      newStatuses[num] = true;
    }
    updatedTask.statuses = Object.keys(newStatuses);
    updateTask(updatedTask);
  }
  let statuses = [1, 2, 3, 4].map(num => (
    <button
      key={num}  
      className={task.statuses[num] ? `status-${num}` : "status-blank"}
      onClick={toggleStatus(num)}></button>
  ));
  
  return (
    <li><h4>{task.name}</h4><span>{statuses}</span></li>
  );
}