package issuetracker.issue;

public class IssueStatusDTO {
	private String id;
	private String status;
	
	public IssueStatusDTO() {}
	
	public IssueStatusDTO(String id, String status) {
		this.id = id;
		this.status = status;
	}
	
	public String getId() {
		return id;
	}
	
	public String getStatus() {
		return status;
	}
}
