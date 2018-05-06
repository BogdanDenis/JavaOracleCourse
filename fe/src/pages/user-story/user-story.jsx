import React, { Component } from 'react';

import {
  CommonHeader,
  UserStoryContainer,
} from '../../components';

import './user-story.sass';

export class UserStory extends Component {
  render() {
    const { match } = this.props;
    const { storyKey } = match.params;

    return (
      <section className="user-story-page">
        <CommonHeader/>
        <UserStoryContainer
          storyKey={storyKey}
        />
      </section>
    );
  }
}
