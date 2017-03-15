import React from 'react';
import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session/session_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = !!state.session.currentUser;
  const formType = ownProps.location.pathname === '/login' ? 'login' : 'signup';
  return {
    loggedIn,
    formType,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.location.pathname === '/login' ? login : signup;
  return {
    processForm: (user) => dispatch(formAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
