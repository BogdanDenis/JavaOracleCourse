import { connect } from 'react-redux';

import { CreateModal } from './create-modal.jsx';
import {
	createUserStory,
	createIssue,
} from '../../actions';
import { selectUserId } from '../../selectors';

const mapStateToProps = state => ({
	userId: selectUserId(state),
});

const mapDispatchToProps = {
	createUserStory,
	createIssue,
};

export const CreateModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateModal);
