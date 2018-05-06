package issuetracker.user_story;

import issuetracker.issue.IssueRespDTO;
import issuetracker.issue.IssueRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class UserStoryDAO {
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<UserStoryRespDTO> findAll() {
		try {
			List<UserStoryRespDTO> res = template.query(
				"SELECT key, name, description, sprintId\n" +
				"FROM UserStory",
				new UserStoryRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public UserStoryRespDTO findByKey(String key) {
		String SQL = "SELECT key, name, description, sprintId\n" +
					 "FROM UserStory\n" +
					 "WHERE key = :key";
		Map params = new HashMap();
		params.put("key", key);
		try {
			UserStoryRespDTO res = template.queryForObject(SQL, params, new UserStoryRowMapper());
			return res;	
		} catch (Exception e) {
			return null;
		}
	}
	
	public UserStoryRespDTO create(UserStoryDTO userStoryDTO) {
		String SQL = "INSERT INTO UserStory(name, description, sprintId)\n" +
					 "VALUES(:name, :description, :sprintId)";
		Map params = new HashMap();
		params.put("name", userStoryDTO.getName());
		params.put("description", userStoryDTO.getDescription());
		params.put("sprintId", userStoryDTO.getSprintId());
		try {
			template.update(SQL, params);
			UserStoryRespDTO res = template.queryForObject(
				"SELECT key, name, description, sprintId\n" +
				"FROM UserStory\n" +
				"WHERE id = (SELECT MAX(id) FROM UserStory)",
				new HashMap<>(),
				new UserStoryRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public UserStoryRespDTO changeName(UserStoryNameDTO userStoryNameDTO) {
		String SQL = "UPDATE UserStory\n" +
					 "SET name = :name\n" +
					 "WHERE key = :key";
		Map params = new HashMap();
		params.put("key", userStoryNameDTO.getKey());
		params.put("name", userStoryNameDTO.getName());
		try {
			template.update(SQL, params);
			UserStoryRespDTO res = this.findByKey(userStoryNameDTO.getKey());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public UserStoryRespDTO changeDescription(UserStoryDescriptionDTO userStoryDescriptionDTO) {
		String SQL = "UPDATE UserStory\n" +
					 "SET description = :description\n" +
					 "WHERE key = :key";
		Map params = new HashMap();
		params.put("key", userStoryDescriptionDTO.getKey());
		params.put("description", userStoryDescriptionDTO.getDescription());
		try {
			template.update(SQL, params);
			UserStoryRespDTO res = this.findByKey(userStoryDescriptionDTO.getKey());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<IssueRespDTO> findStoriesIssues(String key) {
		String SQL = "SELECT key, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, storyKey\n" +
					 "FROM Issue\n" +
					 "WHERE storyKey = :key";
		Map params = new HashMap();
		params.put("key", key);
		try {
			List<IssueRespDTO> res = template.query(SQL, params, new IssueRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public UserStoryRespDTO moveToSprint(UserStorySprintDTO userStorySprintDTO) {
		String SQL = "UPDATE UserStory\n" +
					 "SET sprintId = :sprintId\n" +
					 "WHERE key = :key AND :sprintId IN (SELECT id\n" +
														"FROM Sprint\n" +
														"WHERE projectKey = (SELECT projectKey\n" +
																		   "FROM Sprint\n" +
																		   "WHERE id = sprintId))";
		Map params = new HashMap();
		params.put("key", userStorySprintDTO.getKey());
		params.put("sprintId", userStorySprintDTO.getSprintId());
		try {
			template.update(SQL, params);
			UserStoryRespDTO res = this.findByKey(userStorySprintDTO.getKey());
			return res;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}
