package issuetracker.project;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class ProjectRowMapper implements RowMapper<ProjectRespDTO> {
	public ProjectRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		ProjectRespDTO project = new ProjectRespDTO();
		project.setId(rs.getLong("id"));
		project.setName(rs.getString("name"));
		return project;
	}
}
