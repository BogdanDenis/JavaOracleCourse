export const selectAllStories = (state) => {
	const { viewed } = state.projects;
	if (!viewed) {
		return [];
	}

	const { sprint } = viewed;
	const { backlog } = viewed;

	const stories = [];
	if (sprint && sprint.stories) {
		sprint.stories.map(story => stories.push(story));
	}
	if (backlog && backlog.stories) {
		backlog.stories.map(story => stories.push(story));
	}

	return stories;
};
