import { connect } from 'react-redux';

import { ProjectsContainer } from './projects-container';
import {
  getAllProjects,
} from '../../actions';

const mapStateToProps = state => ({
  projects: state.projects.all,
});

const mapDispatchToProps = {
  getProjects: getAllProjects,
};

export const AllProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsContainer);
