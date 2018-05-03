package issuetracker.sprint;

public class SprintDTO {
	private String name;
	private String projectKey;
	
	public SprintDTO() {}
	
	public SprintDTO(String name, String projectKey) {
		this.name = name;
		this.projectKey = projectKey;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getProjectKey() {
		return projectKey;
	}
	
	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}
}
