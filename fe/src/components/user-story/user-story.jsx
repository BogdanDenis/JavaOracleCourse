import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { STORY_ROUTE } from '../../constants';

export class UserStory extends Component {
  static get propTypes() {
    return {
      getViewedStory: PropTypes.func.isRequired,
      getStoriesIssues: PropTypes.func.isRequired,
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

  saveUserStoryName(e) {
    const { value } = e.target;
    const { userStory } = this.state;

    this.setState({
      userStory: {
        ...userStory,
        name: value,
      },
    });
  }

  saveUserStoryDescription(e) {
    const { value } = e.target;
    const { userStory } = this.state;

    this.setState({
      userStory: {
        ...userStory,
        description: value,
      },
    });
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
        
      </section>
    );
  }
}
