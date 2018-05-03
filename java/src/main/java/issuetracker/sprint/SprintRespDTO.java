package issuetracker.sprint;

public class SprintRespDTO {
	private long id;
	private String name;
	private int isBacklog;
	private int isActive;
	private long projectId;
	
	public SprintRespDTO() {}
	
	public SprintRespDTO(long id, String name, int isBacklog, int isActive, long projectId) {
		this.id = id;
		this.name = name;
		this.isBacklog = isBacklog;
		this.isActive = isActive;
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
	
	public int getIsBacklog() {
		return isBacklog;
	}
	
	public void setIsBacklog(int isBacklog) {
		this.isBacklog = isBacklog;
	}
	
	public int getIsActive() {
		return isActive;
	}
	
	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}
	
	public long getProjectId() {
		return projectId;
	}
	
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
}
