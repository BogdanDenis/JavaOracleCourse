import { connect } from 'react-redux';

import { CreateIssue } from './create-issue.jsx';
import { createIssue } from '../../../../actions';
import {
	selectAllStories,
	selectDevelopers,
} from '../../../../selectors';

const mapStateToProps = state => ({
	stories: selectAllStories(state),
	developers: selectDevelopers(state),
});

const mapDispatchToProps = {
	createIssue,
};

export const CreateIssueContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateIssue);
