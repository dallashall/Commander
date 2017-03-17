import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  return {
    teams: {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);