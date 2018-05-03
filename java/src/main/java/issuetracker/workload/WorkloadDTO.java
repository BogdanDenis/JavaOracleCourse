package issuetracker.workload;

public class WorkloadDTO {
	private long developerId;
	private String projectKey;
	
	public WorkloadDTO() {}
	
	public WorkloadDTO(long developerId, String projectKey) {
		this.developerId = developerId;
		this.projectKey = projectKey;
	}
	
	public long getDeveloperId() {
		return developerId;
	}
	
	public void setDeveloperId(long developerId) {
		this.developerId = developerId;
	}
	
	public String getProjectKey() {
		return projectKey;
	}
	
	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}
}
