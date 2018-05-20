import { connect } from 'react-redux';

import { Issue } from './issue.jsx';
import {
	getViewedIssue,
	getStory,
	changeIssue,
} from '../../actions';
import {
	selectViewedIssue,
	selectDevelopers,
} from '../../selectors';

const mapStateToProps = state => ({
	issue: selectViewedIssue(state),
	developers: selectDevelopers(state),
});

const mapDispatchToProps = {
	getViewedIssue,
	getStory,
	changeIssue,
};

export const IssueContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Issue);
