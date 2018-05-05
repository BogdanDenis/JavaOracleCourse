import { connect } from 'react-redux';

import { Project } from './project';
import {
  getViewedProject,
  getProjectBacklog,
  getProjectActiveSprint,
  getSprintsStories,
} from '../../actions';
import {
  selectViewedProject,
  selectProjectBacklog,
  selectProjectActiveSprint,
} from '../../selectors';

const mapStateToProps = state => ({
  project: selectViewedProject(state),
  backlog: selectProjectBacklog(state),
  sprint: selectProjectActiveSprint(state),
});

const mapDispatchToProps = {
  getViewedProject,
  getProjectBacklog,
  getProjectActiveSprint,
  getSprintsStories,
};

export const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
