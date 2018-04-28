package issuetracker.issue;

public class IssueNameDTO {
	private String id;
	private String name;
	
	public IssueNameDTO() {}
	
	public IssueNameDTO(String id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public String getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
}
