import { connect } from 'react-redux';

import { Project } from './project';
import {
  getViewedProject,
  saveViewedStoryByKey,
} from '../../actions';
import {
  selectViewedProject,
  selectProjectBacklog,
  selectProjectActiveSprint,
  selectProjectsDevelopers,
} from '../../selectors';

const mapStateToProps = state => ({
  project: selectViewedProject(state),
  backlog: selectProjectBacklog(state),
  sprint: selectProjectActiveSprint(state),
  projectDevelopers: selectProjectsDevelopers(state),
});

const mapDispatchToProps = {
  getViewedProject,
  saveViewedStoryByKey,
};

export const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
