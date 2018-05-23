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
import { tokenInjector } from './services';
import { RootReducer } from './reducers';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
  middleware,
  tokenInjector,
  apiMiddleware,
  thunk,
)(createStore);

const store = createStoreWithMiddleware(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'),
);