package issuetracker.workload;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class WorkloadRowMapper implements RowMapper<WorkloadRespDTO> {
	public WorkloadRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		WorkloadRespDTO developerProject = new WorkloadRespDTO();
		developerProject.setId(rs.getLong("id"));
		developerProject.setDeveloperId(rs.getLong("developerId"));
		developerProject.setProjectKey(rs.getString("projectKey"));
		return developerProject;
	}
}
