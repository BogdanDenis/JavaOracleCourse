package issuetracker.issue;

public class IssueDescriptionDTO {
	private String key;
	private String description;
	
	public IssueDescriptionDTO() {}
	
	public IssueDescriptionDTO(String key, String description) {
		this.key = key;
		this.description = description;
	}
	
	public String getKey() {
		return key;
	}
	
	public String getDescription() {
		return description;
	}
}
