import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import * as pages from './pages';
import * as actions from './actions';
import * as routes from './constants';

import 'font-awesome/scss/font-awesome.scss';
import './app.sass';

class App extends Component {
  componentDidMount() {
    this.props.getAllProjects();
    this.loadRelevantData();
  }

  componentWillReceiveProps(nextProps) {
    this.loadRelevantData(nextProps);
  }

  matchProjectKey(pathname) {
    const regex = `${routes.PROJECT_ROUTE}/(.+)`;
    return pathname.match(new RegExp(regex));
  }

  loadProjectData(projectKey) {
    this.props.getViewedProject(projectKey);
    this.props.getProjectBacklog(projectKey);
    this.props.getProjectActiveSprint(projectKey);
    this.props.getProjectsDevelopers(projectKey);
  }

  matchStoryKey(pathname) {
    const regex = `${routes.STORY_ROUTE}/(.+)`;
    return pathname.match(new RegExp(regex));
  }

  loadStoryData(pathname) {
    
  }

  loadRelevantData(props = this.props) {
    const { pathname } = props.history.location;
    const projectMatch = this.matchProjectKey(pathname);
    if (projectMatch) { 
      const projectKey = projectMatch[1];
      if (projectKey) {
        this.loadProjectData(projectKey);
      }
    }
  } 

  render() {
    return (
      <div className="App">
        <Route exact path={routes.LOGIN_ROUTE} component={pages.Login} />
        <Route path={routes.HOME_ROUTE} component={pages.Home} />
        <Route path={routes.ALL_PROJECTS_ROUTE} component={pages.AllProjectsContainer} />
        <Route path={routes.MY_PROJECTS_ROUTE} component={pages.MyProjectsContainer} />
        <Route path={`${routes.PROJECT_ROUTE}/:projectKey`} component={pages.ProjectContainer} />
        <Route path={`${routes.STORY_ROUTE}/:storyKey`} component={pages.UserStory} />
      </div>
    );
  }
}

export default App = withRouter(connect(
  null,
  {
    ...actions,
  }
)(App));