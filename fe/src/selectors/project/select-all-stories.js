export const selectAllStories = (state) => {
	const { viewed } = state.projects;
	if (!viewed) {
		return [];
	}

	const { sprint } = viewed;
	const { backlog } = viewed;

	const stories = [];
	sprint.stories.map(story => stories.push(story));
	backlog.stories.map(story => stories.push(story));

	return stories;
};
