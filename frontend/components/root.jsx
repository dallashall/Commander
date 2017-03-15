import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';

const _redirectIfLoggedIn = (store) => (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/');
  }
}

const _redirectIfLoggedOut = (store) => (nextState, replace) => {
  if (!store.getState().session.currentUser) {
    replace('/login');
  }
}
export default ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route onEnter={_redirectIfLoggedIn(store)} path="/login" component={SessionFormContainer} />
          <Route onEnter={_redirectIfLoggedIn(store)} path="/signup" component={SessionFormContainer} />
          <IndexRoute onEnter={_redirectIfLoggedOut(store)} component={DashboardContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

// Add onEnter to root that redirects to login/signup