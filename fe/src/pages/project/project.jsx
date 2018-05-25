import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

import {
  CommonHeader,
  StoryList,
  CreateSprintModalContainer,
  UserStoryContainer,
  CompleteSprintModalContainer,
  SelectSprintModalContainer,
  CreateWorkloadModalContainer,
} from '../../components';

import './project.sass';

export class Project extends Component {
  static get propTypes() {
    return {
      getViewedProject: PropTypes.func.isRequired,
      saveViewedStoryByKey: PropTypes.func.isRequired,
      project: PropTypes.object,
      sprint: PropTypes.object,
      backlog: PropTypes.object,
      projectDevelopers: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      project: {},
      sprint: {},
      backlog: {},
      projectDevelopers: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      projectIsLoaded: false,
      backlogIsLoaded: false,
      sprintIsLoaded: false,
      developersAreLoaded: false,
      createSprintModalVisible: false,
      completeSprintModalVisible: false,
      selectSprintModalVisible: false,
      createWorkloadModalVisible: false,
      viewedStoryKey: '',
    };

    this.toggleCreateSprintModal = this.toggleCreateSprintModal.bind(this);
    this.toggleCompleteSprintModal = this.toggleCompleteSprintModal.bind(this);
    this.saveViewedUserStoryKey = this.saveViewedUserStoryKey.bind(this);
    this.toggleSelectSprintModal = this.toggleSelectSprintModal.bind(this);
    this.toggleCreateWorkloadModal = this.toggleCreateWorkloadModal.bind(this);
  }

  componentDidMount() {
    const { getViewedProject } = this.props;
    const { projectKey } = this.props.match.params;

    getViewedProject(projectKey);
  }

  toggleCreateSprintModal() {
    const {
      createSprintModalVisible,
    } = this.state;

    this.setState({ createSprintModalVisible: !createSprintModalVisible });
  }

  toggleCompleteSprintModal() {
    const {
      completeSprintModalVisible,
    } = this.state;

    this.setState({ completeSprintModalVisible: !completeSprintModalVisible });
  }

  toggleSelectSprintModal() {
    const {
      selectSprintModalVisible,
    } = this.state;

    this.setState({ selectSprintModalVisible: !selectSprintModalVisible });
  }

  toggleCreateWorkloadModal() {
    const {
      createWorkloadModalVisible,
    } = this.state;

    this.setState({ createWorkloadModalVisible: !createWorkloadModalVisible });
  }

  saveViewedUserStoryKey(key) {
    this.props.saveViewedStoryByKey(key);
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
              <h3 className="sprint__header">
                <span className="sprint__header__title">{sprint.name}</span>
                <Button
                  className="sprint__header__complete"
                  onClick={this.toggleCompleteSprintModal}
                >
                  Complete sprint
              </Button>
              </h3>
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
                onClick={this.toggleSelectSprintModal}
              >
                Choose from existing
              </Button>
              <p>or</p>
              <Button
                onClick={this.toggleCreateSprintModal}
              >
                Create new
              </Button>
            </div>
        }
      </section>
    );
  }

  render() {
    const { projectKey } = this.props.match.params;    
    const {
      project,
      backlog,
      sprint,
      projectDevelopers,
    } = this.props;
    const {
      createSprintModalVisible,
      completeSprintModalVisible,
      selectSprintModalVisible,
      createWorkloadModalVisible,
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
            <div className="project__wrapper__developers">
              <header className="project__wrapper__developers__header">
                <h2 className="project__wrapper__developers__header__title">
                  Developers
                </h2>
                {true &&
                  <Button
                    className="project__wrapper__developers__header__add"
                    onClick={this.toggleCreateWorkloadModal}
                  >
                    Add
                  </Button>
                }
              </header>
              {
                projectDevelopers.map(developer => {
                  return (
                    <div className="project__wrapper__developers__developer">
                      <p className="project__wrapper__developers__developer__name-email">
                        {`${developer.name} ${developer.email}`}
                      </p>
                      {true &&
                        <Button
                          onClick={() => {}}
                        >
                          Remove
                        </Button>
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
        <CreateSprintModalContainer
          projectKey={project.key}
          isVisible={createSprintModalVisible}
          onCancel={this.toggleCreateSprintModal}
          onSubmit={this.toggleCreateSprintModal}
        />
        <CompleteSprintModalContainer
          isVisible={completeSprintModalVisible}
          sprint={sprint}
          onClose={this.toggleCompleteSprintModal}
        />
        <SelectSprintModalContainer
          isVisible={selectSprintModalVisible}
          onCancel={this.toggleSelectSprintModal}
          onSubmit={this.toggleSelectSprintModal}          
        />
        <CreateWorkloadModalContainer
          isVisible={createWorkloadModalVisible}
          onCancel={this.toggleCreateWorkloadModal}
          onSubmit={this.toggleCreateWorkloadModal} 
          projectKey={projectKey}         
        />
      </section>
    );
  }
}