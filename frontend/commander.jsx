import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {session:{currentUser: window.currentUser}};
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  // window.store = store;
  ReactDOM.render(<Root store={store}>Commander</Root>, root);
});

window.inviteMember = function (email, team) {
  return $.ajax({
    method: 'POST',
    url: '/api/new_team_member',
    data: {new_team_member: {email: "dallas.hall@gmail.com", team: {id: 1, name: "cool team"}}}
  })
}