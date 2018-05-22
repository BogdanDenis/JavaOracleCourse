import { connect } from 'react-redux';

import { SelectSprintModal } from './select-sprint-modal.jsx';
import { startSprint } from '../../actions';
import { selectIncompleteSprints } from '../../selectors';

const mapStateToProps = state => ({
	sprints: selectIncompleteSprints(state),
});

const mapDispatchToProps = {
	startSprint,
};

export const SelectSprintModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SelectSprintModal);
