import { connect } from 'react-redux';

import { CreateIssue } from './create-issue.jsx';
import { createIssue } from '../../../../actions';
import {
	selectAllStories,
	selectProjectsDevelopers,
} from '../../../../selectors';

const mapStateToProps = state => ({
	stories: selectAllStories(state),
	developers: selectProjectsDevelopers(state),
});

const mapDispatchToProps = {
	createIssue,
};

export const CreateIssueContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateIssue);
