import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { IssueListItem } from './components';

export class IssueList extends Component {
  static get propTypes() {
    return {
      onIssueClick: PropTypes.func,
      issues: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onIssueClick: () => {},
      issues: [],
    };
  }

  render() {
    const {
      issues,
      onIssueClick,
    } = this.props;

    return (
      issues.map(issue => {
        return (
          <IssueListItem
            issue={issue}
            assigneeName={issue.assigneeId.toString()}
            onItemClick={() => onIssueClick(issue.key)}
          />
        );
      })
    );
  }
};
