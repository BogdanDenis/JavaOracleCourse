package issuetracker.workload;

public class WorkloadRespDTO {
	private long id;
	private long developerId;
	private long projectId;
	
	public WorkloadRespDTO() {}
	
	public WorkloadRespDTO(long id, long developerId, long projectId) {
		this.id = id;
		this.developerId = developerId;
		this.projectId = projectId;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public long getDeveloperId() {
		return developerId;
	}
	
	public void setDeveloperId(long developerId) {
		this.developerId = developerId;
	}
	
	public long getProjectId() {
		return projectId;
	}
	
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
}
