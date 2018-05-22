import { connect } from 'react-redux';

import { CreateUserStory } from './create-user-story.jsx';
import {
	selectProjectBacklog,
	selectProjectActiveSprint,
} from '../../../../selectors';

const mapStateToProps = state => ({
	sprints: [selectProjectBacklog(state), selectProjectActiveSprint(state)],
});

const mapDispatchToProps = {

};

export const CreateUserStoryContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateUserStory);
