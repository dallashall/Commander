import React from 'react';
import { hashHistory } from 'react-router';

export default ({ project, setCurrentProject }) => {
  let handleClick = (id) => (e) => {
    setCurrentProject(id).then(
      hashHistory.push('/dashboard/project')
    );
  };
  return (
    <li onClick={handleClick(project.id)}>{project.name}</li>
  );
};
