import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import {
  ISSUE_STATUSES,
  ISSUE_TYPE_ICONS,
} from '../../../../constants';

import './story-list-item.sass';

export const StoryListItem = ({
  storykey,
  name,
  status,
  onItemClick,
}) => {
  const itemClasses = classnames(
    'story-list__item',
    { 'closed': status === ISSUE_STATUSES.CLOSED },
  );

  return (
    <section className={itemClasses} onClick={onItemClick}>
      <section className="story-list__item__info">
        <span className="story-list__item__info__type">
          <i className={`fa ${ISSUE_TYPE_ICONS.UserStory}`}></i>
        </span>
        <span className="story-list__item__info__key">{storykey}</span>
        <span className="story-list__item__info__name">{name}</span>
      </section>
    </section>
  );
};