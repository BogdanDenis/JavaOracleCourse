import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import {
  ISSUE_STATUSES,
  ISSUE_TYPE_ICONS,
  STORY_ROUTE,
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
        <Link
          className="story-list__item__info__key"
          to={`${STORY_ROUTE}/${storykey}`}
        >
          {storykey}
        </Link>
        <span className="story-list__item__info__name">{name}</span>
      </section>
    </section>
  );
};