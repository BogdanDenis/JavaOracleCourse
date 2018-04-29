package issuetracker.developer;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class DeveloperRowMapper implements RowMapper<DeveloperRespDTO> {
	public DeveloperRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		DeveloperRespDTO developer = new DeveloperRespDTO();
		developer.setId(rs.getLong("id"));
		developer.setName(rs.getString("name"));
		developer.setEmail(rs.getString("email"));
		return developer;
	}
}
