package issuetracker.workload;

public class WorkloadDTO {
	private long developerId;
	private long projectId;
	
	public WorkloadDTO() {}
	
	public WorkloadDTO(long developerId, long projectId) {
		this.developerId = developerId;
		this.projectId = projectId;
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
