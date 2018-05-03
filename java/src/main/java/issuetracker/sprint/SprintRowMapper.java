package issuetracker.sprint;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class SprintRowMapper implements RowMapper<SprintRespDTO> {
	public SprintRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		SprintRespDTO sprint = new SprintRespDTO();
		sprint.setId(rs.getLong("id"));
		sprint.setName(rs.getString("name"));
		sprint.setIsBacklog(rs.getInt("isBacklog"));
		sprint.setIsActive(rs.getInt("isActive"));
		sprint.setProjectId(rs.getLong("projectId"));
		return sprint;
	}
}
