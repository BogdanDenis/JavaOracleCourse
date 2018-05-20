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
      issues.length ?
        issues.map(issue => {
          return (
            <IssueListItem
              issue={issue}
              assigneeName={issue.assigneeName || ''}
              onItemClick={() => onIssueClick(issue.key)}
            />
          );
        })
        :
        <p>No issues in this user story</p>
    );
  }
};
