export const selectViewedStory = (state) => {
  const { viewed } = state.userStories;
  const { developers } = state.projects.viewed;
  if (!developers) {
    return viewed;
  }
  const { issues } = viewed;
  if (!issues) {
    return viewed;
  }
  const issuesWithDevelopers = issues.map(issue => {
    const assignee = developers.find(developer => developer.id === issue.assigneId);
    const reporter = developers.find(developer => developer.id === issue.reporterId);
    return {
      ...issue,
      assigneeName: assignee ? assignee.name : '',
      reporterName: reporter ? reporter.name : '',
    };
  });
  return {
    ...viewed,
    issues: issuesWithDevelopers,
  };
}