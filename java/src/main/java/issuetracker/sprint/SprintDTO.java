package issuetracker.sprint;

public class SprintDTO {
	private String name;
	private long projectId;
	
	public SprintDTO() {}
	
	public SprintDTO(String name, long projectId) {
		this.name = name;
		this.projectId = projectId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public long getProjectId() {
		return projectId;
	}
	
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
}
