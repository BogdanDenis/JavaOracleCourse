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
  changeStorySprint,
} from '../../actions';
import {
  selectViewedStory,
  selectDevelopers,
  selectIncompleteSprints,
  selectProjectActiveSprint,
  selectProjectBacklog,
} from '../../selectors';

const mapStateToProps = state => ({
  userStory: selectViewedStory(state),
  developers: selectDevelopers(state),
  sprints: [
    ...selectIncompleteSprints(state),
    selectProjectBacklog(state),    
    selectProjectActiveSprint(state),
  ],
});

const mapDispatchToProps = {
  getViewedStory,
  getSprint,
  getStoriesIssues,
  changeStoryName,
  changeStoryDescription,
  changeStoryStatus,
  changeStorySprint,
};

export const UserStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserStory);
