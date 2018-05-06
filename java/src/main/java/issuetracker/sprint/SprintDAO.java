package issuetracker.sprint;

import issuetracker.issue.IssueRespDTO;
import issuetracker.issue.IssueRowMapper;
import issuetracker.user_story.UserStoryRespDTO;
import issuetracker.user_story.UserStoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class SprintDAO {
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<SprintRespDTO> findAll() {
		try {
			List<SprintRespDTO> res = template.query(
				"SELECT id, name, isBacklog, isActive, projectKey\n" +
					"FROM Sprint",
				new SprintRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO findById(long id) {
		String SQL = "SELECT id, name, isBacklog, isActive, projectKey\n" +
					 "FROM Sprint\n" +
					 "WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			SprintRespDTO res = template.queryForObject(SQL, params, new SprintRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO create(SprintDTO sprintDTO) {
		String SQL = "INSERT INTO Sprint(name, projectKey)\n" +
					 "VALUES(:name, :projectKey)";
		Map params = new HashMap();
		params.put("name", sprintDTO.getName());
		params.put("projectKey", sprintDTO.getProjectKey());
		try {
			template.update(SQL, params);
			SprintRespDTO res = template.queryForObject(
				"SELECT id, name, isActive, isBacklog, projectKey\n" +
					"FROM Sprint\n" +
					"WHERE id = (SELECT MAX(id) FROM Sprint)",
				new HashMap<>(),
				new SprintRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<UserStoryRespDTO> getSprintsStories(long id) {
		String SQL = "SELECT key, name, description, status, sprintId\n" +
					 "FROM UserStory\n" +
					 "WHERE sprintId = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			List<UserStoryRespDTO> res = template.query(SQL, params, new UserStoryRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO startSprint(long id) {
		String SQL = "UPDATE Sprint\n" +
					 "SET isActive = 1\n" +
					 "WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			template.update(SQL, params);
			SQL = "UPDATE Sprint\n" +
				  "SET isActive = 0\n" +
				  "WHERE id < :id AND projectKey = (SELECT projectKey\n" +
												   "FROM Sprint\n" +
												   "WHERE id = :id)";
			template.update(SQL, params);
			SprintRespDTO res = this.findById(id);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
}
