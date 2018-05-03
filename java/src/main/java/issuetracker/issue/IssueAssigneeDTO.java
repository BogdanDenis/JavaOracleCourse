package issuetracker.issue;

public class IssueAssigneeDTO {
	private String key;
	private long assigneeId;
	
	public IssueAssigneeDTO() {}
	
	public IssueAssigneeDTO(String key, long assigneeId) {
		this.key = key;
		this.assigneeId = assigneeId;
	}
	
	public String getKey() {
		return key;
	}
	
	public long getAssigneeId() {
		return assigneeId;
	}
}
