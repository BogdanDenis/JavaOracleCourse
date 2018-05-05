import { connect } from 'react-redux';

import { UserStory } from './user-story';
import {
  getViewedStory,
  getStoriesIssues,
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
};

export const UserStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserStory);
