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
	
	public List<IssueDTO> findAll() {
		List<IssueDTO> res = template.query(
			"SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, projectId\n" +
				"FROM Issue",
			new IssueRowMapper()
		);
		
		return res;
	}
	
	public IssueDTO findById(String id) {
		String SQL = "SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, projectId\n" +
				"FROM Issue\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		IssueDTO issue = (IssueDTO) template.queryForObject(SQL, params, new IssueRowMapper());
		
		return issue;
	}
	
	public void create(IssueDTO issue) {
		String SQL = "INSERT INTO Issue(type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed, projectId)\n" +
				"VALUES((SELECT typeName" +
						"FROM Type" +
						"WHERE typeName = :type)," +
						":name, :description, :creationDate, :assigneeId, :reporterId," +
						"(SELECT statusName" +
						"FROM Status" +
						"WHERE statusName = :status)," +
						":estimationOriginal, :estimationUsed, :projectId)";
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
		params.put("projectId", issue.getProjectId());
		template.update(SQL, params);
	}
	
	public void changeType(IssueTypeDTO issueTypeDTO) {
		String SQL = "UPDATE Issue\n" +
				"SET type = :type\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("type", issueTypeDTO.getType());
		params.put("id", issueTypeDTO.getId());
		template.update(SQL, params);
	}
	
	public void changeName(IssueNameDTO issueNameDTO) {
		String SQL = "UPDATE Issue\n" +
				"SET name = :name\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("name", issueNameDTO.getName());
		params.put("id", issueNameDTO.getId());
		template.update(SQL, params);
	}
	
	public void changeDescription(IssueDescriptionDTO issueDescriptionDTO) {
		String SQL = "UPDATE Issue\n" +
				"SET description = :description\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("description", issueDescriptionDTO.getDescription());
		params.put("id", issueDescriptionDTO.getId());
		template.update(SQL, params);
	}
	
	public void changeAssignee(IssueAssigneeDTO issueAssigneeDTO) {
		String SQL = "UPDATE Issue\n" +
				"SET assigneeId = :assignee\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("assignee", issueAssigneeDTO.getAssigneeId());
		params.put("id", issueAssigneeDTO.getId());
		template.update(SQL, params);
	}
	
	public void changeStatus(IssueStatusDTO issueStatusDTO) {
		String SQL = "UPDATE Issue\n" +
				"SET status = :status\n" +
				"WHERE id = :id";
		Map params = new HashMap();
		params.put("status", issueStatusDTO.getStatus());
		params.put("id", issueStatusDTO.getId());
		template.update(SQL, params);
	}
}
