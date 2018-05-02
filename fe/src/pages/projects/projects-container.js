import { connect } from 'react-redux';

import { Projects } from './projects';
import { saveViewedProject } from '../../actions';

const mapDispatchToProps = {
  saveViewedProject,
};

export const ProjectsContainer = connect(
  null,
  mapDispatchToProps,
)(Projects);
