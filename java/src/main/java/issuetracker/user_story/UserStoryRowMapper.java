package issuetracker.user_story;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@SuppressWarnings("rawtype")
public class UserStoryRowMapper implements RowMapper<UserStoryRespDTO> {
	public UserStoryRespDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		UserStoryRespDTO story = new UserStoryRespDTO();
		story.setKey(rs.getString("key"));
		story.setName(rs.getString("name"));
		story.setDescription(rs.getString("description"));
		story.setStatus(rs.getString("status"));
		story.setSprintId(rs.getLong("sprintId"));
		return story;
	}
}
