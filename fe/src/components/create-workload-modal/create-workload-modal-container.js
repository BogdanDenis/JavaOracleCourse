import { connect } from 'react-redux';

import { CreateWorkloadModal } from './create-workload-modal.jsx';
import { createWorkload } from '../../actions';
import {
	selectDevelopers,
} from '../../selectors';

const mapStateToProps = state => ({
	developers: selectDevelopers(state),
});

const mapDispatchToProps = {
	createWorkload,
};

export const CreateWorkloadModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateWorkloadModal);
