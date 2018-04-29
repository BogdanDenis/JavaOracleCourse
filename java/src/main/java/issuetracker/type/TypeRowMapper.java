package issuetracker.type;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtypes")
public class TypeRowMapper implements RowMapper {
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		TypeDTO type = new TypeDTO();
		type.setTypeName(rs.getString("typeName"));
		return type;
	}
}
