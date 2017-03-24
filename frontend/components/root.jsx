import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import TeamsFormContainer from './dashboard/teams/teams_form_container';
import TeamMemberFormContainer from './dashboard/team_members/team_member_form_container';
import ProjectFormContainer from './dashboard/projects/project_form_container';
import ProjectsDetailContainer from './dashboard/projects/projects_detail_container';
import AssignedTasksContainer from './dashboard/tasks/assigned_tasks_container';

const _redirectIfLoggedIn = (store) => (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/dashboard');
  }
}

const _redirectIfNoTeam = (store) => (nextState, replace) => {
  if(!store.getState().team.id) {
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
          <IndexRoute onEnter={_redirectFromRoot(store)}/>
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
          component={DashboardContainer}>
            <IndexRoute component={AssignedTasksContainer} />
            
            <Route path="teams/new"
            edit={false}
            component={TeamsFormContainer}/>

            <Route path="teams/edit"
            onEnter={_redirectIfNoTeam(store)}
            edit={true}
            component={TeamsFormContainer}>
              <Route path="team_members"
              component={TeamMemberFormContainer} />
            </Route>

            <Route path="team_members/edit"
              component={TeamMemberFormContainer} />  

            <Route
              path="project"
              component={ProjectsDetailContainer}>
            </Route>

            <Route
              path="task/:taskId"
              component={ProjectsDetailContainer}>
            </Route>
            
            <Route
              path="project/edit"
              edit={true}
              component={ProjectFormContainer} />
              
            <Route
              path="project/new"
              component={ProjectFormContainer} />
            
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}
