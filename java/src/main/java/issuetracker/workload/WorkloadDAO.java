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
				"SELECT id, developerId, projectKey\n" +
					"FROM Workload\n" +
					"WHERE isActive = 1",
				new WorkloadRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<WorkloadRespDTO> findProjectsWithDeveloper(long developerId) {
		try {
			String SQL = "SELECT id, developerId, projectKey " +
						 "FROM Workload " +
						 "WHERE developerId = :developerId AND isActive = 1";
			Map params = new HashMap();
			params.put("developerId", developerId);
			List<WorkloadRespDTO> res = template.query(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public List<WorkloadRespDTO> findDevelopersOnAProject(String projectKey) {
		try {
			String SQL = "SELECT id, developerId, projectKey " +
						 "FROM Workload " +
						 "WHERE projectKey = :projectKey AND isActive = 1";
			Map params = new HashMap();
			params.put("projectKey", projectKey);
			List<WorkloadRespDTO> res = template.query(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public WorkloadRespDTO addDeveloperToAProject(WorkloadDTO workloadDTO) {
		try {
			String SQL = "INSERT INTO Workload(developerId, projectKey) " +
						 "VALUES(:developerId, :projectKey)";
			Map params = new HashMap();
			params.put("developerId", workloadDTO.getDeveloperId());
			params.put("projectKey", workloadDTO.getProjectKey());
			template.update(SQL, params);
			SQL = "SELECT id, developerId, projectKey " +
				  "FROM Workload " +
				  "WHERE developerId = :developerId AND projectKey = :projectKey";
			WorkloadRespDTO res = template.queryForObject(SQL, params, new WorkloadRowMapper());
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean removeDeveloperFromAProject(WorkloadDTO workloadDTO) {
		String SQL = "UPDATE Workload\n" +
					 "SET isActive = 0\n" +
					 "WHERE developerId = :developerId AND projectKey = :projectKey";
		Map params = new HashMap();
		params.put("projectKey", workloadDTO.getProjectKey());
		params.put("developerId", workloadDTO.getDeveloperId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
