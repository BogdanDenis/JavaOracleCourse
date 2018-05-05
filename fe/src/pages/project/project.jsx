import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

import {
  CommonHeader,
  StoryList,
  CreateSprintModalContainer,
  UserStoryContainer,
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
      viewedStoryKey: '',
    };

    this.toggleCreateSprintModal = this.toggleCreateSprintModal.bind(this);
    this.saveViewedUserStoryKey = this.saveViewedUserStoryKey.bind(this);
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

    if (this.props.sprint !== nextProps.sprint && nextProps.sprint.id && !this.state.sprintIsLoaded) {
      const { getSprintsStories } = this.props;
      const { id } = nextProps.sprint;

      getSprintsStories(id);
      this.setState({ sprintIsLoaded: true });
    }
  }

  toggleCreateSprintModal() {
    const {
      createSprintModalVisible,
    } = this.state;

    this.setState({ createSprintModalVisible: !createSprintModalVisible });
  }

  saveViewedUserStoryKey(key) {
    this.setState({ viewedStoryKey: key });
  }

  renderSprintStories() {
    const {
      sprint,
    } = this.props;

    return (
      <section className="sprint">      
        {
          sprint.id ?
            <Fragment>
              <h3 className="sprint__title">{sprint.name}</h3>
              <section className="sprint__stories">
              <StoryList
                stories={sprint.stories}
                onStoryClick={this.saveViewedUserStoryKey}
              />
              </section>
            </Fragment>
            :
            <div className="sprint__create">
              <p className="sprint__create__title">
                Don't have an active sprint?
              </p>
              <Button
                onClick={this.toggleCreateSprintModal}
              >
                Create
              </Button>
            </div>
        }
      </section>
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
      viewedStoryKey,
    } = this.state;

    return (
      <section className="project-page">
        <CommonHeader />
        <section className="project">
          <h2 className="project__name">{project.name}</h2>
          <div className="project__wrapper">
            <div className="project__wrapper__sprint-backlog">
              {this.renderSprintStories()}
              <section className="backlog">
                <h3 className="backlog__title">{backlog.name}</h3>
                <section className="backlog__stories">
                  <StoryList
                    stories={backlog.stories}
                    onStoryClick={this.saveViewedUserStoryKey}
                  />
                </section>
              </section>
            </div>
            <div className="project__wrapper__viewed-story">
              <UserStoryContainer
                storyKey={viewedStoryKey}
              />
            </div>
          </div>
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