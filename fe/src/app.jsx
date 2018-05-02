import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import * as pages from './pages';
import * as routes from './constants';

import './app.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={routes.LOGIN_ROUTE} component={pages.Login} />
        <Route path={routes.HOME_ROUTE} component={pages.Home} />
        <Route path={routes.ALL_PROJECTS_ROUTE} component={pages.AllProjectsContainer} />
        <Route path={routes.MY_PROJECTS_ROUTE} component={pages.MyProjectsContainer} />
      </div>
    );
  }
}

export default App = withRouter(App);