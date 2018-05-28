import { connect } from 'react-redux';

import { CreateProjectModal } from './create-project-modal.jsx';
import { createProject } from '../../actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	createProject,
};

export const CreateProjectModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateProjectModal);
