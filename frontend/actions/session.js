import {
  getToApi,
  postToApi,
  patchToApi,
  deleteToApi
} from '../util/api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
});

export const login = formUser => (dispatch) => (
  postToApi('/users', formUser)
    .then(payload => dispatch(receiveUser(payload)))
    .catch(err => dispatch(receiveErrors(err)))
)

export const signup = formUser => (dispatch) => (
  postToApi('/session', formUser)
    .then(payload => dispatch(receiveUser(payload)))
    .catch(err => dispatch(receiveErrors(err)))
)

export const logout = () => (dispatch) => (
  deleteToApi('/session')
    .then(() => removeUser)
);
