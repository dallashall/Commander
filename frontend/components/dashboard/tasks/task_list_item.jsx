import React from 'react';
import merge from 'lodash/merge';

export default ({ task, updateTask, viewTask, editTask, newTask, setSelectedTask, fetchAllTaskAssignments, animateLeave }) => {
  let newStatus = task.status || 1;
  let updatedTask = merge({}, task);
  const toggleStatus = (num) => (e) => {
    if (newStatus === num) {
      return;
    } else {
      newStatus = num;
    }
    updatedTask.status = newStatus;
    updateTask(updatedTask);
  }

  const view = (taskId) => (e) => {
    // animateLeave();
    setTimeout(() => {
      setSelectedTask(taskId).then(
        res => fetchAllTaskAssignments(res.task.id)
      ).then(
        () => viewTask()
      );
    }, 400);
  };
  
  const statusNames = {
    1: "Not Started",
    2: "In-Progress (Problems)",
    3: "In-Progress",
    4: "Completed"
  }
  let statuses = [1, 2, 3, 4].map(num => (
    <button
      key={num}
      className={newStatus === num ? `status-${num}` : `status- blank - ${num }`}
      onClick={toggleStatus(num)}>
      <div className="tooltip"><div className="tooltip-text">{statusNames[num]}</div></div>
    </button>
  ));
  
  return (
    <li
      className="floating">
      <h4 className="flex flex-1" onClick={view(task.id)}>{task.name}</h4> <span>{statuses}</span></li>
  );
}