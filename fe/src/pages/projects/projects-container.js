import { connect } from 'react-redux';

import { Projects } from './projects';
import { getViewedProject } from '../../actions';
import { selectAdminStatus } from '../../selectors';

const mapStateToProps = state => ({
  isAdmin: selectAdminStatus(state),
});

const mapDispatchToProps = {
  getViewedProject,
};

export const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
