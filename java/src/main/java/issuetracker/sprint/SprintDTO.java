package issuetracker.sprint;

public class SprintDTO {
	private String name;
	private String status;
	private long projectId;
	
	public SprintDTO() {}
	
	public SprintDTO(String name, String status, long projectId) {
		this.name = name;
		this.status = status;
		this.projectId = projectId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public long getProjectId() {
		return projectId;
	}
	
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
}
