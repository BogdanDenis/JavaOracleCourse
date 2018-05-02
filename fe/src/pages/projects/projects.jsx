import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  CommonHeader,
} from '../../components';
import { ProjectsListContainer } from './components';

import './projects.sass';

export class Projects extends Component {
  static get propTypes() {
    return {
      getProjects: PropTypes.func.isRequired,
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

  onProjectSelect(id) {
    console.log(id);
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
