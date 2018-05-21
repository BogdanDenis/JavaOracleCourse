import { connect } from 'react-redux';

import { LogWorkModal } from './log-work-modal.jsx';
import {
	changeIssue,
} from '../../actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	changeIssue,
};

export const LogWorkModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(LogWorkModal);
