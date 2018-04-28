package issuetracker.issue;

public class IssueDescriptionDTO {
	private String id;
	private String description;
	
	public IssueDescriptionDTO() {}
	
	public IssueDescriptionDTO(String id, String description) {
		this.id = id;
		this.description = description;
	}
	
	public String getId() {
		return id;
	}
	
	public String getDescription() {
		return description;
	}
}
