import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

import {
  ModalWindow,
  StoryList,
} from '../../components';
import { ISSUE_STATUSES } from '../../constants';

export class CompleteSprintModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      sprint: PropTypes.object,
      onClose: PropTypes.func.isRequired,
      completeSprint: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      isVisible: false,
      sprint: {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };

    this.handleCompleteSprintClick = this.handleCompleteSprintClick.bind(this);
  }

  checkAllStoriesAreClosed(stories) {
    if (!stories) {
      return false;
    }
    return stories.every(story => {
      return story.status === ISSUE_STATUSES.CLOSED;
    });
  }

  handleCompleteSprintClick() {
    const {
      sprint,
      onClose,
      completeSprint,
    } = this.props;

    const { stories } = sprint;
    const storiesAreClosed = this.checkAllStoriesAreClosed(stories);
    if (storiesAreClosed) {
      completeSprint(sprint.id);
      onClose();
    } else {
      this.setState({
        error: 'All stories must be closed or moved to another sprint before completing current sprint!',
      });
    }
  }

  render() {
    const {
      isVisible,
      sprint,
      onClose,
    } = this.props;
    const {
      error,
    } = this.state;

    return (
      <ModalWindow
        isVisible={isVisible}
        title="Complete sprint"
      >
        <section className="complete-sprint">
          <h3 className="complete-sprint__name">{sprint.name}</h3>
          <StoryList
            stories={sprint.stories}
          />
          <Button
            onClick={this.handleCompleteSprintClick}
          >
            Complete
          </Button>
          <p className="complete-sprint__error">{error}</p>
        </section>
      </ModalWindow>
    );
  }
}
