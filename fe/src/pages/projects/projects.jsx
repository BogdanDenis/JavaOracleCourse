import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  CommonHeader,
} from '../../components';
import { ProjectsListContainer } from './components';
import * as routes from '../../constants';

import './projects.sass';

export class Projects extends Component {
  static get propTypes() {
    return {
      getProjects: PropTypes.func.isRequired,
      getViewedProject: PropTypes.func.isRequired,
      projects: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      projects: [],
    };
  }

  constructor(props) {
    super(props);

    this.onProjectSelect = this.onProjectSelect.bind(this);
  }

  onProjectSelect(key) {
    this.props.getViewedProject(key);
    this.props.history.push(`${routes.PROJECT_ROUTE}/${key}`);
  }

  render() {
    const {
      getProjects,
      projects,
    } = this.props;

    return (
      <section className="projects-page">
        <CommonHeader />
        <ProjectsListContainer
          getProjects={getProjects}
          projects={projects}
          onProjectClick={this.onProjectSelect}
        />
      </section>
    );
  }
}