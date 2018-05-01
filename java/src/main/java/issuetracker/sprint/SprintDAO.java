package issuetracker.sprint;

import issuetracker.issue.IssueRespDTO;
import issuetracker.issue.IssueRowMapper;
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
				"SELECT id, name, status, projectId\n" +
					"FROM Sprint",
				new SprintRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO findById(long id) {
		String SQL = "SELECT id, name, status, projectId\n" +
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
		String SQL = "INSERT INTO Sprint(name, status, projectId)\n" +
					"VALUES(:name, :status, :projectId)";
		Map params = new HashMap();
		params.put("name", sprintDTO.getName());
		params.put("status", sprintDTO.getStatus());
		params.put("projectId", sprintDTO.getProjectId());
		try {
			template.update(SQL, params);
			SprintRespDTO res = template.queryForObject(
				"SELECT id, name, status, projectId\n" +
					"FROM Sprint\n" +
					"WHERE id = (SELECT MAX(id) FROM Sprint)",
				new HashMap<>(),
				SprintRespDTO.class
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public SprintRespDTO changeStatus(SprintStatusDTO sprintStatusDTO) {
		String SQL = "UPDATE Sprint SET status = (SELECT statusName FROM Status WHERE statusName = :status)\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("status", sprintStatusDTO.getStatus());
		params.put("id", sprintStatusDTO.getId());
		try {
			template.update(SQL, params);
			SprintRespDTO res = this.findById(sprintStatusDTO.getId());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<IssueRespDTO> getSprintsIssues(long id) {
		String SQL = "SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, sprintId\n" +
					"FROM Issue\n" +
					"WHERE sprintId = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			List<IssueRespDTO> res = template.query(SQL, params, new IssueRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
}
