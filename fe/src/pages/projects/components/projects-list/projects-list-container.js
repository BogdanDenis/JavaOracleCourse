import { connect } from 'react-redux';

import { ProjectsList } from './projects-list';

const mapDispatchToProps = {};

export const ProjectsListContainer = connect(
  null,
  mapDispatchToProps,
)(ProjectsList);
