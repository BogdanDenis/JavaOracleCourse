package issuetracker.project;

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
		List<ProjectRespDTO> res = template.query(
			"SELECT id, name FROM Project",
			new ProjectRowMapper()
		);
		
		return res;
	}
	
	public ProjectRespDTO findById(long id) {
		String SQL = "SELECT id, name FROM Project WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		ProjectRespDTO project = template.queryForObject(SQL, params, new ProjectRowMapper());
		
		return project;
	}
	
	public void create(ProjectDTO projectDTO) {
		String SQL = "INSERT INTO Project(name) VALUES(:name)";
		Map params = new HashMap();
		params.put("name", projectDTO.getName());
		template.update(SQL, params);
	}
}
