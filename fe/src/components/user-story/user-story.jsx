import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  InputWithSave,
  SelectWithSave,
  IssueList,
} from '../../components';
import {
  STORY_ROUTE,
  ISSUE_STATUSES,
} from '../../constants';

export class UserStory extends Component {
  static get propTypes() {
    return {
      getViewedStory: PropTypes.func.isRequired,
      getSprint: PropTypes.func.isRequired,
      getStoriesIssues: PropTypes.func.isRequired,
      changeStoryName: PropTypes.func.isRequired,
      changeStoryDescription: PropTypes.func.isRequired,
      changeStoryStatus: PropTypes.func.isRequired,
      userStory: PropTypes.object,
      developers: PropTypes.array,
      storyKey: PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      userStory: {},
      developers: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      userStory: props.userStory,
      storyStatus: [],
    };

    this.saveUserStoryName = this.saveUserStoryName.bind(this);
    this.saveUserStoryDescription = this.saveUserStoryDescription.bind(this);
    this.saveUserStoryStatus = this.saveUserStoryStatus.bind(this);
  }

  checkStoryUpdate(props = this.props) {
    const {
      storyKey,
      userStory,
      getViewedStory,
      getStoriesIssues,
      getSprint,
    } = props;

    if (storyKey && userStory.key !== storyKey) {
      getViewedStory(storyKey);
      getStoriesIssues(storyKey);
    } else {
      this.setState({ userStory });
      this.saveStoryStatusList(userStory);
      this.saveStoryWithDevs(userStory, props.developers);
    }
  }

  componentDidMount() {
    this.checkStoryUpdate();
  }

  componentWillReceiveProps(nextProps) {
    const {
      userStory,
      getSprint,
      developers,
    } = this.props;

    if (userStory.key !== nextProps.userStory.key) {
      getSprint(nextProps.userStory.sprintId);
    }

    this.setState({ userStory: nextProps.userStory });
    this.saveStoryStatusList(nextProps.userStory);

    if (developers !== nextProps.developers && userStory.issues) {
      this.saveStoryWithDevs(userStory, nextProps.developers);
    }
  }

  saveStoryStatusList(userStory) {
    const statuses = Object.values(ISSUE_STATUSES).map(status => {
      return {
        value: status,
        text: status,
        selected: status === userStory.status,
      };
    });

    this.setState({ storyStatus: statuses });
  }

  saveStoryWithDevs(userStory, developers) {
    const userStoryWithDevelopers = {
      ...userStory,
      issues: userStory.issues.map(issue => {
        const assignee = developers.find(developer => developer.id === issue.assigneeId);
        const reporter = developers.find(developer => developer.id === issue.reporterId);

        return {
          ...issue,
          assigneeName: assignee ? assignee.name : '',
          reporterName: reporter ? reporter.name : '',
        }
      }),
    };

    this.setState({ userStory: userStoryWithDevelopers });
  }

  saveUserStoryName() {
    const { userStory } = this.state;
    const userStoryDTO = {
      key: userStory.key,
      name: userStory.name,
    };

    this.props.changeStoryName(userStoryDTO);
  }

  saveUserStoryDescription() {
    const { userStory } = this.state;
    const userStoryDTO = {
      key: userStory.key,
      description: userStory.description,
    };

    this.props.changeStoryDescription(userStoryDTO);
  }

  saveUserStoryStatus() {
    const {
      userStory,
      storyStatus,
    } = this.state;

    const userStoryDTO = {
      key: userStory.key,
      status: storyStatus.find(status => status.selected === true).value,
    };

    this.props.changeStoryStatus(userStoryDTO);
  }

  render() {
    const {
      userStory,
      storyStatus,
    } = this.state;

    return (
      <section className="user-story">
        <h4 className="user-story__key">
          <Link to={`${STORY_ROUTE}/${userStory.key}`}>{userStory.key}</Link>
        </h4>
        <section className="user-story__form">
          <InputWithSave
            scope={userStory}
            type="text"
            name="name"
            label="Name"
            placeholder="User story name"
            onInputChange={(userStory) => this.setState({ userStory })}
            onChangeSave={this.saveUserStoryName}
            onChangeCancel={(userStory) => this.setState({ userStory })}
          />
          <InputWithSave
            scope={userStory}
            type="text"
            name="description"
            label="Description"
            placeholder="User story description"
            componentClass="textarea"
            onInputChange={(userStory) => this.setState({ userStory })}
            onChangeSave={this.saveUserStoryDescription}
            onChangeCancel={(userStory) => this.setState({ userStory })}
          />
          <SelectWithSave
            name="status"
            label="Status"
            placeholder="User story status"
            options={storyStatus}
            onInputChange={(storyStatus) => {this.setState({ storyStatus })}}
            onChangeSave={this.saveUserStoryStatus}
            onChangeCancel={(storyStatus) => {this.setState({ storyStatus })}}
          />
        </section>
        <section className="user-story__issues">
          <h4 className="user-story__issues__title">Issues</h4>
          <IssueList
            issues={userStory.issues}
            onIssueClick={(key) => console.log(key)}
          />
        </section>
      </section>
    );
  }
}
