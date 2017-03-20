import React from 'react';
import { connect } from 'react-redux';
import ProjectsDetail from './projects_detail';

const _initial_state = {
  currentProject: {}
};

const mapStateToProps = (state = _initial_state, ownProps) => {
  return { currentProject: state.project.currentProject };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  test: () => console.log("container test")
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsDetail);