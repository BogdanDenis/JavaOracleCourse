package issuetracker.workload;

public class WorkloadRespDTO {
	private long id;
	private long developerId;
	private String projectKey;
	
	public WorkloadRespDTO() {}
	
	public WorkloadRespDTO(long id, long developerId, String projectKey) {
		this.id = id;
		this.developerId = developerId;
		this.projectKey = projectKey;
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
	
	public String getProjectKey() {
		return projectKey;
	}
	
	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}
}
