import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

import {
  CommonHeader,
  StoryList,
  CreateSprintModalContainer,
} from '../../components';

import './project.sass';

export class Project extends Component {
  static get propTypes() {
    return {
      getViewedProject: PropTypes.func.isRequired,
      getProjectActiveSprint: PropTypes.func.isRequired,
      getProjectBacklog: PropTypes.func.isRequired,
      getSprintsStories: PropTypes.func.isRequired,
      project: PropTypes.object,
      sprint: PropTypes.object,
      backlog: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      project: {},
      sprint: {},
      backlog: {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      projectIsLoaded: false,
      backlogIsLoaded: false,
      sprintIsLoaded: false,
      createSprintModalVisible: false,
    };

    this.toggleCreateSprintModal = this.toggleCreateSprintModal.bind(this);
  }

  componentDidMount() {
    const { getViewedProject } = this.props;
    const { projectKey } = this.props.match.params;

    getViewedProject(projectKey);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project !== nextProps.project && !this.state.projectIsLoaded) {
      const {
        getProjectBacklog,
        getProjectActiveSprint,
      } = this.props;

      const { key } = nextProps.project;

      getProjectBacklog(key);
      getProjectActiveSprint(key);
      this.setState({ projectIsLoaded: true });
    }

    if (this.props.backlog !== nextProps.backlog && nextProps.backlog.id && !this.state.backlogIsLoaded) {
      const { getSprintsStories } = this.props;
      const { id } = nextProps.backlog;

      getSprintsStories(id);
      this.setState({ backlogIsLoaded: true });
    }
  }

  toggleCreateSprintModal() {
    const {
      createSprintModalVisible,
    } = this.state;

    this.setState({ createSprintModalVisible: !createSprintModalVisible });
  }

  renderSprintStories() {
    const {
      sprint,
    } = this.props;

    return (
      sprint.id ?
        <StoryList
          stories={sprint.stories}
          onStoryClick={(key) => console.log(key)}
        />
        :
        <div className="project__sprint__create">
          <p className="project__sprint__create__title">
            Don't have an active sprint?
          </p>
          <Button
            onClick={this.toggleCreateSprintModal}
          >
            Create
          </Button>
        </div>
    );
  }

  render() {
    const {
      project,
      backlog,
      sprint,
    } = this.props;
    const {
      createSprintModalVisible,
    } = this.state;

    return (
      <section className="project-page">
        <CommonHeader />
        <section className="project">
          <h2 className="project__name">{project.name}</h2>
          <section className="project__sprint">
            {this.renderSprintStories()}
          </section>
          <section className="project__backlog">
            <StoryList
              stories={backlog.stories}
              onStoryClick={(key) => console.log(key)}
            />
          </section>
        </section>
        <CreateSprintModalContainer
          projectKey={project.key}
          isVisible={createSprintModalVisible}
          onCancel={this.toggleCreateSprintModal}
          onSubmit={this.toggleCreateSprintModal}
        />
      </section>
    );
  }
}