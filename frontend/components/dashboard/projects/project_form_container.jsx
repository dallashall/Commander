import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project_form';
import {
  updateProject,
  createProject,
  destroyProject,
  fetchTeamProjects,
  fetchAllProjects,
  setCurrentProject
} from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let currentProject;
  if (ownProps.route.edit) {
    currentProject = state.project.currentProject;
  } else {
    currentProject = {
      name: "",
      description: ""
    };
  }
  return {
    team: state.team,
    currentProject
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formAction = ownProps.route.edit ? updateProject : createProject;
  return {
    formAction: (project) => dispatch(formAction(project)),
    destroyProject: (projectId) => dispatch(destroyProject(projectId)),
    fetchAllProjects: () => dispatch(fetchAllProjects()),
    fetchTeamProjects: (projectId) => dispatch(fetchTeamProjects(projectId)),
    setCurrentProject: (projectId) => dispatch(setCurrentProject(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);