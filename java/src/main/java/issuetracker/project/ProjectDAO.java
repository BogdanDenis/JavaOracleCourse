package issuetracker.project;

import issuetracker.sprint.SprintDAO;
import issuetracker.sprint.SprintDTO;
import issuetracker.sprint.SprintRespDTO;
import issuetracker.sprint.SprintRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProjectDAO {
	@Autowired
	private SprintDAO sprintDAO;
	
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<ProjectRespDTO> findAll() {
		try {
			List<ProjectRespDTO> res = template.query(
					"SELECT id, key, name FROM Project",
					new ProjectRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public ProjectRespDTO findByKey(String key) {
		String SQL = "SELECT id, key, name FROM Project WHERE key = :key";
		Map params = new HashMap();
		params.put("key", key);
		try {
			ProjectRespDTO project = template.queryForObject(SQL, params, new ProjectRowMapper());
			return project;
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean create(ProjectDTO projectDTO) {
		String SQL = "INSERT INTO Project(key, name) VALUES(:key, :name)";
		Map params = new HashMap();
		params.put("key", projectDTO.getKey());
		params.put("name", projectDTO.getName());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public List<SprintRespDTO> findSprints(String key) {
		String SQL = "SELECT id, name, isBacklog, isActive, projectKey\n" +
					 "FROM Sprint\n" +
					 "WHERE projectKey = :key AND isBacklog = 0";
		Map params = new HashMap();
		params.put("key", key);
		try {
			List<SprintRespDTO> res = template.query(SQL, params, new SprintRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO findActiveSprint(String key) {
		String SQL = "SELECT id, name, isBacklog, isActive, projectKey\n" +
					 "FROM Sprint\n" +
					 "WHERE projectKey = :key AND isBacklog = 0 AND isActive = 1";
		Map params = new HashMap();
		params.put("key", key);
		try {
			SprintRespDTO res = template.queryForObject(SQL, params, new SprintRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO findBacklog(String key) {
		String SQL = "SELECT id, name, isBacklog, isActive, projectKey\n" +
					 "FROM Sprint\n" +
					 "WHERE projectKey = :key AND isBacklog = 1";
		Map params = new HashMap();
		params.put("key", key);
		try {
			SprintRespDTO res = template.queryForObject(SQL, params, new SprintRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
}
