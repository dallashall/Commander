import {
  getToApi,
  postToApi,
  patchToApi,
  deleteToApi
} from '../util/api_util';
import { action } from '../util/action';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';


export const login = formUser => dispatch => (
  postToApi('/users', formUser)
    .then(payload => dispatch(action(RECEIVE_USER, payload)))
    .catch(errors => dispatch(action(RECEIVE_USER_ERRORS, errors)))
)

export const signup = formUser => dispatch => (
  postToApi('/session', formUser)
    .then(payload => dispatch(action(R, payload)))
    .catch(errors => dispatch(action(RECEIVE_USER_ERRORS, errors)))
)

export const logout = () => dispatch => (
  deleteToApi('/session')
    .then(() => dispatch(action(REMOVE_USER)))
    .catch(errors => dispatch(action(RECEIVE_USER_ERRORS, errors)))
);
