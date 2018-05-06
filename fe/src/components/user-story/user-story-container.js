import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserStory } from './user-story';
import {
  getViewedStory,
  getStoriesIssues,
  changeStoryName,
  changeStoryDescription,
  changeStoryStatus,
} from '../../actions';
import {
  selectViewedStory,
} from '../../selectors';

const mapStateToProps = state => ({
  userStory: selectViewedStory(state),
});

const mapDispatchToProps = {
  getViewedStory,
  getStoriesIssues,
  changeStoryName,
  changeStoryDescription,
  changeStoryStatus,
};

export const UserStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserStory);
