package issuetracker.status;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class StatusRowMapper implements RowMapper {
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		StatusDTO status = new StatusDTO();
		status.setStatusName(rs.getString("statusName"));
		return status;
	}
}
