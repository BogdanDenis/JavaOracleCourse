import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import {
  ISSUE_STATUSES,
  ISSUE_TYPE_ICONS,
  ISSUE_ROUTE,
} from '../../../../constants';

import './issue-list-item.sass';

export const IssueListItem = ({
  issue,
  assigneeName,
  onItemClick,
}) => {
  const itemClasses = classnames(
    'issue-list__item',
    { 'closed': issue.status === ISSUE_STATUSES.CLOSED },
  );
  const typeclass = issue.type ? issue.type.toLowerCase() : '';

  return (
    <section className={itemClasses} onClick={onItemClick}>
      <section className="issue-list__item__info">
        <span className={`issue-list__item__info__type ${typeclass}`}>
          <i className={`fa ${ISSUE_TYPE_ICONS[issue.type]}`}></i>
        </span>
        <Link
          className="issue-list__item__info__key"
          to={`${ISSUE_ROUTE}/${issue.key}`}
        >
          {issue.key}
        </Link>
        <span className="issue-list__item__info__name">{issue.name}</span>
        <span
          className="issue-list__item__info__assignee"
          title={`Assignee: ${issue.assigneeName}`}
        >
          {assigneeName.substring(0, 1)}
        </span>            
      </section>
      <section className="issue-list__item__estimation">
        <span className="issue-list__item__estimation__original" title="Estimation original">
          {`${issue.estimationOriginal}m`}
        </span>
        <span className="issue-list__item__estimation__left" title="Estimation left">
          {`${Math.max(0, issue.estimationOriginal - issue.estimationUsed)}m`}
        </span>      
      </section>
    </section>
  );
};