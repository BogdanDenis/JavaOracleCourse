import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import 'font-awesome/less/font-awesome.less';

import App from './app';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
  middleware,
  apiMiddleware,
  thunk,
)(createStore);

const reducer = combineReducers({

});

const store = createStoreWithMiddleware(
  reducer,
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