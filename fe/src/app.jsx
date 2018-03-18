import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { withProps } from 'recompose';

import * as pages from './pages';
import * as routes from './constants';

import './app.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={routes.HOME_ROUTE} component={pages.Home} />
      </div>
    );
  }
}


export default App = withRouter(App);