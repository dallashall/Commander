import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// export default (preloadedState) => (
//   createStore(RootReducer, preloadedState, applyMiddleware(thunk))
// );
export default (preloadedState) => (
  createStore(RootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)))
);