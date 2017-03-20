import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  team: state.team
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  test: () => "test"
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);