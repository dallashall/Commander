import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';

const _redirectIfLoggedIn = (store) => (nextState, replace) => {
  console.log(nextState);
  if (store.getState().session.currentUser) {
    replace('/dashboard');
  }
}

const _redirectIfLoggedOut = (store) => (nextState, replace) => {
  if (!store.getState().session.currentUser) {
    replace('/login');
  }
}

const _redirectFromRoot = (store) => (nextState, replace) => {
  if (!store.getState().session.currentUser) {
    replace('/login');
  } else {
    replace('/dashboard');
  }
}

export default ({store}) => {
  return (
    <Provider
    store={store}>
      <Router
      history={hashHistory}>
        <Route
        path="/"
        component={App}>
          <IndexRoute onEnter={_redirectFromRoot(store)} />
          <Route
          onEnter={_redirectIfLoggedIn(store)}
          path="/login"
          component={SessionFormContainer} />

          <Route
          onEnter={_redirectIfLoggedIn(store)}
          path="/signup"
          component={SessionFormContainer} />

          <Route
          path="/dashboard"
          onEnter={_redirectIfLoggedOut(store)}
          component={DashboardContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

// <IndexRoute onEnter={_redirectIfLoggedOut(store)} component={DashboardContainer} />