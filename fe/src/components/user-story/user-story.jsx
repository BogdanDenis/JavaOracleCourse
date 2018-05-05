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
} from '../../components';
import { STORY_ROUTE } from '../../constants';

export class UserStory extends Component {
  static get propTypes() {
    return {
      getViewedStory: PropTypes.func.isRequired,
      getStoriesIssues: PropTypes.func.isRequired,
      changeStoryName: PropTypes.func.isRequired,
      changeStoryDescription: PropTypes.func.isRequired,
      userStory: PropTypes.object,
      storyKey: PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      userStory: {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      userStory: props.userStory,
    };

    this.saveUserStoryName = this.saveUserStoryName.bind(this);
    this.saveUserStoryDescription = this.saveUserStoryDescription.bind(this);
  }

  checkStoryUpdate(props = this.props) {
    const {
      storyKey,
      userStory,
      getViewedStory,
      getStoriesIssues,
    } = props;

    if (storyKey && userStory.key !== storyKey) {
      getViewedStory(storyKey);
      getStoriesIssues(storyKey);
    }

    this.setState({ userStory });
  }

  componentDidMount() {
    this.checkStoryUpdate();
  }

  componentWillReceiveProps(nextProps) {
    this.checkStoryUpdate(nextProps);
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

  render() {
    const {
      userStory,
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
        </section>
        
      </section>
    );
  }
}
