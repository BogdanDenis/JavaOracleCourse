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
        {/* <Route exact path={routes.START_ROUTE} component={pages.Login} /> */}
      </div>
    );
  }
}


export default App = withRouter(App);