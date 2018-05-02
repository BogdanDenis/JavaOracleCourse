import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Projects } from './projects';
import {
  getAllProjects,
  getWorkload,
} from '../../actions';
import { selectMyProjects } from './selectors/select-my-projects';

const mapStateToProps = state => ({
  projects: selectMyProjects(state),
  developerId: state.user.id,
});

const mapDispatchToProps = {
  getProjects: getAllProjects,
  getWorkload,
};

const MyProjectsHOC = (WrappedComponent) => {
  class MyProjects extends Component {
    componentDidMount() {
      const {
        developerId,
        getProjects,
        getWorkload,
      } = this.props;

      getProjects();
      getWorkload(developerId);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyProjects);
}

export const MyProjectsContainer = MyProjectsHOC(Projects);
