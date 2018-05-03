import { connect } from 'react-redux';

import { Projects } from './projects';
import { getViewedProject } from '../../actions';

const mapDispatchToProps = {
  getViewedProject,
};

export const ProjectsContainer = connect(
  null,
  mapDispatchToProps,
)(Projects);
