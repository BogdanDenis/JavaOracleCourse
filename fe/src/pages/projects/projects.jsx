import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
} from 'react-bootstrap';

import {
  CommonHeader,
  CreateProjectModalContainer,
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

    this.state = {
      createProjectModalVisible: false,
    };

    this.onProjectSelect = this.onProjectSelect.bind(this);
    this.toggleCreateProjectModal = this.toggleCreateProjectModal.bind(this);
  }

  onProjectSelect(key) {
    this.props.getViewedProject(key);
    this.props.history.push(`${routes.PROJECT_ROUTE}/${key}`);
  }

  toggleCreateProjectModal() {
    const { createProjectModalVisible } = this.state;

    this.setState({ createProjectModalVisible: !createProjectModalVisible });
  }

  render() {
    const {
      getProjects,
      projects,
    } = this.props;
    const { createProjectModalVisible } = this.state;

    return (
      <section className="projects-page">
        <CommonHeader />
        <Button
          onClick={this.toggleCreateProjectModal}
        >
          Create a project
        </Button>
        <ProjectsListContainer
          getProjects={getProjects}
          projects={projects}
          onProjectClick={this.onProjectSelect}
        />
        <CreateProjectModalContainer
          isVisible={createProjectModalVisible}
          onCancel={this.toggleCreateProjectModal}
          onSubmit={this.toggleCreateProjectModal} 
        />
      </section>
    );
  }
}
