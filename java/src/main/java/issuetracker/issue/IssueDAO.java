package issuetracker.issue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class IssueDAO {
	
	@Autowired
	private JdbcTemplate template;
	
	public List<IssueDTO> findAll() {
		List<IssueDTO> res = template.query(
			"SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed\n" +
				"FROM Issue",
			new IssueRowMapper()
		);
		
		return res;
	}
	
	public IssueDTO findById(String id) {
		IssueDTO issue = (IssueDTO) template.queryForObject(
			"SELECT id, type, name, description, creationDate, assigneeId, reporterId, status, estimationOriginal, estimationUsed\n" +
			"FROM Issue\n" +
			"WHERE id=?",
			new Object[] { id },
			new IssueRowMapper()
		);
		
		return issue;
	}
	
	public void create(IssueDTO issue) {
		template.update(
			"INSERT INTO Issue\n" +
				"VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			new Object[] {
				issue.getId(),
				issue.getType(),
				issue.getName(),
				issue.getDescription(),
				issue.getCreationDate(),
				issue.getAssigneeId(),
				issue.getReporterId(),
				issue.getStatus(),
				issue.getEstimationOriginal(),
				issue.getEstimationUsed()
			}
		);
	}
	
	public void changeType(IssueTypeDTO issueTypeDTO) {
		template.update(
			"UPDATE Issue\n" +
				"SET type = ?\n" +
				"WHERE id = ?",
			new Object[] { issueTypeDTO.getType(), issueTypeDTO.getId() }
		);
	}
	
	public void changeName(IssueNameDTO issueNameDTO) {
		template.update(
				"UPDATE Issue\n" +
					"SET name = ?\n" +
					"WHERE id = ?",
				new Object[] { issueNameDTO.getName(), issueNameDTO.getId() }
		);
	}
	
	public void changeDescription(IssueDescriptionDTO issueDescriptionDTO) {
		template.update(
				"UPDATE Issue\n" +
					"SET description = ?\n" +
					"WHERE id = ?",
				new Object[] { issueDescriptionDTO.getDescription(), issueDescriptionDTO.getId() }
		);
	}
	
	public void changeAssignee(IssueAssigneeDTO issueAssigneeDTO) {
		template.update(
			"UPDATE Issue\n" +
				"SET assigneeId = ?\n" +
				"WHERE id = ?",
			new Object[] { issueAssigneeDTO.getAssigneeId(), issueAssigneeDTO.getId() }
		);
	}
	
	public void changeStatus(IssueStatusDTO issueStatusDTO) {
		template.update(
			"UPDATE Issue\n" +
				"SET status = ?\n" +
				"WHERE id = ?",
			new Object[] { issueStatusDTO.getStatus(), issueStatusDTO.getId() }
		);
	}
}
