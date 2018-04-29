package issuetracker.issue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class IssueDAO {
	
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<IssueRespDTO> findAll() {
		try {
			List<IssueRespDTO> res = template.query(
				"SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, sprintId\n" +
					"FROM Issue",
				new IssueRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public IssueRespDTO findById(String id) {
		String SQL = "SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, sprintId\n" +
					"FROM Issue\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			IssueRespDTO issue = template.queryForObject(SQL, params, new IssueRowMapper());
			return issue;
		} catch (Exception e) {
			return null;
		}
	}
	
	public boolean create(IssueDTO issue) {
		String SQL = "INSERT INTO Issue(type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, sprintId)\n" +
					"VALUES((SELECT typeName\n" +
						"FROM Type\n" +
						"WHERE typeName = :type)," +
						"CAST(:name AS VARCHAR2(255)), CAST(:description AS VARCHAR2(255)), :creationDate, :assigneeId, :reporterId," +
						"(SELECT statusName\n" +
						"FROM Status\n" +
						"WHERE statusName = :status)," +
						":estimationOriginal, :estimationUsed, :sprintId)";
		Map params = new HashMap();
		params.put("type", issue.getType());
		params.put("name", issue.getName());
		params.put("description", issue.getDescription());
		params.put("creationDate", issue.getCreationDate());
		params.put("assigneeId", issue.getAssigneeId());
		params.put("reporterId", issue.getReporterId());
		params.put("status", issue.getStatus());
		params.put("estimationOriginal", issue.getEstimationOriginal());
		params.put("estimationUsed", issue.getEstimationUsed());
		params.put("sprintId", issue.getSprintId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean changeType(IssueTypeDTO issueTypeDTO) {
		String SQL = "UPDATE Issue\n" +
					"SET type = :type\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("type", issueTypeDTO.getType());
		params.put("id", issueTypeDTO.getId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean changeName(IssueNameDTO issueNameDTO) {
		String SQL = "UPDATE Issue\n" +
					"SET name = :name\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("name", issueNameDTO.getName());
		params.put("id", issueNameDTO.getId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean changeDescription(IssueDescriptionDTO issueDescriptionDTO) {
		String SQL = "UPDATE Issue\n" +
					"SET description = :description\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("description", issueDescriptionDTO.getDescription());
		params.put("id", issueDescriptionDTO.getId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean changeAssignee(IssueAssigneeDTO issueAssigneeDTO) {
		String SQL = "UPDATE Issue\n" +
					"SET assigneeId = :assignee\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("assignee", issueAssigneeDTO.getAssigneeId());
		params.put("id", issueAssigneeDTO.getId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean changeStatus(IssueStatusDTO issueStatusDTO) {
		String SQL = "UPDATE Issue\n" +
					"SET status = :status\n" +
					"WHERE id = :id";
		Map params = new HashMap();
		params.put("status", issueStatusDTO.getStatus());
		params.put("id", issueStatusDTO.getId());
		try {
			template.update(SQL, params);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
