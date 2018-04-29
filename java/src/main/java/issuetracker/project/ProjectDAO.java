package issuetracker.project;

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
	private NamedParameterJdbcTemplate template;
	
	public List<ProjectRespDTO> findAll() {
		try {
			List<ProjectRespDTO> res = template.query(
					"SELECT id, name FROM Project",
					new ProjectRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public ProjectRespDTO findById(long id) {
		String SQL = "SELECT id, name FROM Project WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			ProjectRespDTO project = template.queryForObject(SQL, params, new ProjectRowMapper());
			return project;
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean create(ProjectDTO projectDTO) {
		String SQL = "INSERT INTO Project(name) VALUES(:name)";
		Map params = new HashMap();
		params.put("name", projectDTO.getName());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public List<SprintRespDTO> findSprints(long id) {
		String SQL = "SELECT id, name, status, projectId\n" +
					"FROM Sprint\n" +
					"WHERE projectId = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			List<SprintRespDTO> res = template.query(SQL, params, new SprintRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
}
