import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';

import 'font-awesome/scss/font-awesome.scss';

import App from './app';
import {
  tokenInjector,
  PersistentState,
} from './services';
import { RootReducer } from './reducers';
import { getDevelopers } from './actions';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
  middleware,
  tokenInjector,
  apiMiddleware,
  thunk,
);

console.log(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  RootReducer,
  PersistentState.getState(),
  createStoreWithMiddleware,
);
PersistentState.init(store);

store.dispatch(getDevelopers());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'),
);