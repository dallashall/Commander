import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import { 
  fetchAllProjects,
  fetchTeamProjects,
  createProject,
  updateProject,
  destroyProject,
  setCurrentProject
} from '../../../actions/project_actions';
import Projects from './projects';

const _initial_state = ({
  allProjects: {},
  teamProjects: {},
  currentProject: {}
});

const mapStateToProps = (state = _initial_state, ownProps) => ({
  allProjects: values(state.project.allProjects),
  teamProjects: values(state.project.teamProjects),
  currentProject: state.project.currentProject,
  team: state.team
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  fetchTeamProjects: (teamId) => dispatch(fetchTeamProjects(teamId)),
  setCurrentProject: (projectId) => dispatch(setCurrentProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
