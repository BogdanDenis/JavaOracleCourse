import { connect } from 'react-redux';

import { Project } from './project';
import {
  getViewedProject,
  saveViewedStoryByKey,
  deleteWorkload,
} from '../../actions';
import {
  selectViewedProject,
  selectProjectBacklog,
  selectProjectActiveSprint,
  selectProjectsDevelopers,
  selectAdminStatus,
} from '../../selectors';

const mapStateToProps = state => ({
  project: selectViewedProject(state),
  backlog: selectProjectBacklog(state),
  sprint: selectProjectActiveSprint(state),
  projectDevelopers: selectProjectsDevelopers(state),
  isAdmin: selectAdminStatus(state),
});

const mapDispatchToProps = {
  getViewedProject,
  saveViewedStoryByKey,
  deleteWorkload,
};

export const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
