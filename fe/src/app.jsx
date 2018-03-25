import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link, Route, Switch } from 'react-router-dom';
import { withProps } from 'recompose';

import * as pages from './pages';
import * as routes from './constants';

import './app.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={routes.START_ROUTE} component={pages.Home} />
        <Route path={routes.HOME_ROUTE} component={pages.Home} />
        <Route path={routes.PRODUCTS_ROUTE} component={pages.ProductsContainer} />
      </div>
    );
  }
}


export default App = withRouter(App);