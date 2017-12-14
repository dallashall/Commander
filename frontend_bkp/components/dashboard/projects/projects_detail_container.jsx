import React from 'react';
import { connect } from 'react-redux';
import ProjectsDetail from './projects_detail';

const _initial_state = {
  currentProject: {}
};

const mapStateToProps = (state = _initial_state, ownProps) => {
  return { currentProject: state.project.currentProject };
};

export default connect(mapStateToProps, null)(ProjectsDetail);