export const selectIncompleteSprints = (state) => {
	const { viewed } = state.projects;
	if (!viewed) {
		return [];
	}

	return viewed.incompleteSprints;
};
