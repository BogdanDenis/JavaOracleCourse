package issuetracker.issue;

public class IssueStatusDTO {
	private String key;
	private String status;
	
	public IssueStatusDTO() {}
	
	public IssueStatusDTO(String key, String status) {
		this.key= key;
		this.status = status;
	}
	
	public String getKey() {
		return key;
	}
	
	public String getStatus() {
		return status;
	}
}
