import { selectAllStories } from '../../selectors';
import {
	saveViewedStory,
	getStoriesIssues,
} from './';


export const saveViewedStoryByKey = key => (dispatch, getState) => {
	const stories = selectAllStories(getState());

	const story = stories.find(userStory => userStory.key === key);
	dispatch(saveViewedStory(story));
	dispatch(getStoriesIssues(key));
};
