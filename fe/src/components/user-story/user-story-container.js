import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserStory } from './user-story';
import {
  getViewedStory,
  getStoriesIssues,
  getSprint,
  changeStoryName,
  changeStoryDescription,
  changeStoryStatus,
} from '../../actions';
import {
  selectViewedStory,
  selectDevelopers,
} from '../../selectors';

const mapStateToProps = state => ({
  userStory: selectViewedStory(state),
  developers: selectDevelopers(state),
});

const mapDispatchToProps = {
  getViewedStory,
  getSprint,
  getStoriesIssues,
  changeStoryName,
  changeStoryDescription,
  changeStoryStatus,
};

export const UserStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserStory);
