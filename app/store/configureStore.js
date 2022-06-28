import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {createReducerManager} from './reducerManager';
import authUser from './authUser';
import notifications from './notifications';

const initialReducers = {
  authUser,
  notifications,
};

export default function configureStore(preloadedState) {
  const reducerManager = createReducerManager(initialReducers);

  const store = createStore(
    reducerManager.reduce,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  store.reducerManager = reducerManager;

  return store;
}
