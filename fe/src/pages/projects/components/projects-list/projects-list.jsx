import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Table,
} from 'react-bootstrap';

export class ProjectsList extends Component {
  static get propTypes() {
    return {
      getProjects: PropTypes.func.isRequired,
      onProjectClick: PropTypes.func,
      projects: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onProjectClick: () => {},
      projects: [],
    };
  }

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const {
      projects,
      onProjectClick,
    } = this.props;
    
    return (
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map((project) => {
              return (
                <tr onClick={() => onProjectClick(project.key)}>
                  <td>{project.key}</td>
                  <td>{project.name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }
}