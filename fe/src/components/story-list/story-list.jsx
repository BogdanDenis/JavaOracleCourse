import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { StoryListItem } from './components';

export class StoryList extends Component {
  static get propTypes() {
    return {
      onStoryClick: PropTypes.func,
      stories: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onStoryClick: () => {},
      stories: [],
    };
  }
  
  render() {
    const {
      stories,
      onStoryClick,
    } = this.props;

    return (
      stories.length ? 
        stories.map(story => {
          return (
            <StoryListItem
              storykey={story.key}
              name={story.name}
              status={story.status}
              onItemClick={() => onStoryClick(story.key)}
            />
          );
        })
        :
        <p>No stories in this sprint</p>
    );
  }
}
