import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import { ISSUE_STATUSES } from '../../../constants';

export const IssueListItem = ({
  key,
  name,
  type,
  status,
  estimationOriginal,
  estimationUsed,
  assigneeName
}) => {
  const itemClasses = classnames(
    'issue-list__item',
    { 'closed': status === ISSUE_STATUSES.CLOSED },
  );

  return (
    <section className={itemClasses}>
      <section className="issue-list__item__info">
        <span className="issue-list__item__info__type">{type}</span>
        <span className="issue-list__item__info__key">{key}</span>
        <span className="issue-list__item__info__name">{name}</span>
        <span className="issue-list__item__info__assignee">
          {assigneeName.substring(0, 1)}
        </span>            
      </section>
      <section className="issue-list__item__estimation">
        <span className="issue-list__item__estimation__original">
          {`${estimationOriginal}m`}
        </span>
        <span className="issue-list__item__estimation__left">
          {`${Math.max(0, estimationOriginal - estimationUsed)}m`}
        </span>      
      </section>
    </section>
  );
};