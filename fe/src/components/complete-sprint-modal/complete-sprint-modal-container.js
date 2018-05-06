import { connect } from 'react-redux';

import { CompleteSprintModal } from './complete-sprint-modal';
import {
  completeSprint,
} from '../../actions';

const mapDispatchToProps = {
  completeSprint,
};

export const CompleteSprintModalContainer = connect(
  null,
  mapDispatchToProps,
)(CompleteSprintModal);
