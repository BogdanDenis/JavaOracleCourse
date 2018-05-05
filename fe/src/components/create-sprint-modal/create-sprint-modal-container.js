import { connect } from 'react-redux';

import { CreateSprintModal } from './create-sprint-modal';
import {
  createSprint
} from '../../actions';

const mapDispatchToProps = {
  createSprint,
};

export const CreateSprintModalContainer = connect(
  null,
  mapDispatchToProps,
)(CreateSprintModal);
