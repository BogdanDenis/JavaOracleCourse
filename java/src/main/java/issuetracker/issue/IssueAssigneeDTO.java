package issuetracker.issue;

public class IssueAssigneeDTO {
	private String id;
	private long assigneeId;
	
	public IssueAssigneeDTO() {}
	
	public IssueAssigneeDTO(String id, long assigneeId) {
		this.id = id;
		this.assigneeId = assigneeId;
	}
	
	public String getId() {
		return id;
	}
	
	public long getAssigneeId() {
		return assigneeId;
	}
}
