package issuetracker.issue;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class IssueRowMapper implements RowMapper<IssueRespDTO> {
	public IssueRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		IssueRespDTO issue = new IssueRespDTO();
		issue.setId(rs.getString("id"));
		issue.setType(rs.getString("type"));
		issue.setName(rs.getString("name"));
		issue.setDescription(rs.getString("description"));
		issue.setCreationDate(rs.getInt("creationDate"));
		issue.setAssigneeId(rs.getLong("assigneeId"));
		issue.setReporterId(rs.getLong("reporterId"));
		issue.setStatus(rs.getString("status"));
		issue.setEstimationOriginal(rs.getInt("estimationOriginal"));
		issue.setEstimationUsed(rs.getInt("estimationUsed"));
		issue.setSprintId(rs.getLong("sprintId"));
		return issue;
	}
}
