import {
  getUser,
  postUser,
  patchUser,
  deleteUser,
  postSession,
  deleteSession
} from '../../util/session_api_utils';
import {hashHistory} from 'react-router';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const removeUser = (user) => ({
  type: REMOVE_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (formUser) => (dispatch) => {
  return postSession(formUser).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = (id) => (dispatch) => {
  return deleteSession(id).then(
    msg => dispatch(receiveErrors(msg))
  );
};

export const signup = (formUser) => (dispatch) => {
  return postUser(formUser).then(
    user => dispatch(receiveUser(user))
  );
};

export const deleteAccount = (id) => (dispatch) => {
  return deleteUser(id).then(
    msg => dispatch(receiveErrors(msg))
  );
};