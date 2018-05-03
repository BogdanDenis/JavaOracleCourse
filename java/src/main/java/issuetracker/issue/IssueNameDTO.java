package issuetracker.issue;

public class IssueNameDTO {
	private String key;
	private String name;
	
	public IssueNameDTO() {}
	
	public IssueNameDTO(String key, String name) {
		this.key = key;
		this.name = name;
	}
	
	public String getKey() {
		return key;
	}
	
	public String getName() {
		return name;
	}
}
