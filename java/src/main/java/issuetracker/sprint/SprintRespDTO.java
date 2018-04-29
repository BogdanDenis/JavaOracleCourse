package issuetracker.sprint;

public class SprintRespDTO {
	private long id;
	private String name;
	private String status;
	private long projectId;
	
	public SprintRespDTO() {}
	
	public SprintRespDTO(long id, String name, String status, long projectId) {
		this.id = id;
		this.name = name;
		this.status = status;
		this.projectId = projectId;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
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
