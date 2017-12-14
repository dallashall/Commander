import React from 'react';
import { hashHistory } from 'react-router';

export default ({ project, setCurrentProject, toggleMenu }) => {
  let handleSelect = (id) => (e) => {
    setCurrentProject(id).then(
      hashHistory.push('/dashboard/project')
    ).then(
      toggleMenu()
    );
  };
  return (
    <li> <button className="btn btn-dropdown" onClick={handleSelect(project.id)}>{project.name}</button></li>
  );
};
