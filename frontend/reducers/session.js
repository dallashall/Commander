import { RECEIVE_USER, REMOVE_USER } from '../actions/session';

export default (state = {currentUser: null}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return ({ currentUser: action.payload.currentUser });
    case REMOVE_USER:
      return ({ currentUser: null });  
    default:
      return state;
  }
}