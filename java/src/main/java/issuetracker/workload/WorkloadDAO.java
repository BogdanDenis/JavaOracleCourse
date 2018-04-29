package issuetracker.workload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class WorkloadDAO {
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<WorkloadRespDTO> findAll() {
		try {
			List<WorkloadRespDTO> res = template.query(
				"SELECT id, developerId, projectId FROM Workload",
				new WorkloadRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<WorkloadRespDTO> findProjectsWithDeveloper(long developerId) {
		try {
			String SQL = "SELECT id, developerId, projectId " +
						"FROM Workload " +
						"WHERE developerId = :developerId";
			Map params = new HashMap();
			params.put("developerId", developerId);
			List<WorkloadRespDTO> res = template.query(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<WorkloadRespDTO> findDevelopersOnAProject(long projectId) {
		try {
			String SQL = "SELECT id, developerId, projectId " +
						"FROM Workload " +
						"WHERE projectId = :projectId";
			Map params = new HashMap();
			params.put("projectId", projectId);
			List<WorkloadRespDTO> res = template.query(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public WorkloadRespDTO addDeveloperToAProject(WorkloadDTO workloadDTO) {
		try {
			String SQL = "INSERT INTO Workload(developerId, projectId) " +
						"VALUES(:developerId, :projectId)";
			Map params = new HashMap();
			params.put("developerId", workloadDTO.getDeveloperId());
			params.put("projectId", workloadDTO.getProjectId());
			template.update(SQL, params);
			SQL = "SELECT id, developerId, projectId " +
					"FROM Workload " +
					"WHERE developerId = :developerId AND projectId = :projectId";
			WorkloadRespDTO res = template.queryForObject(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
}
