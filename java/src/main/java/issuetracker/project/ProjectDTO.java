package issuetracker.project;

public class ProjectDTO {
	private String key;
	private String name;
	
	public ProjectDTO() {}
	
	public ProjectDTO(String key, String name) {
		this.key = key;
		this.name = name;
	}
	
	public String getKey() {
		return key;
	}
	
	public void setKey(String key) {
		this.key = key;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
