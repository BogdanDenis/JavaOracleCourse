package issuetracker.sprint;

public class SprintRespDTO {
	private long id;
	private String name;
	private int isBacklog;
	private int isActive;
	private int isComplete;
	private String projectKey;
	
	public SprintRespDTO() {}
	
	public SprintRespDTO(long id, String name, int isBacklog, int isActive, int isComplete, String projectKey) {
		this.id = id;
		this.name = name;
		this.isBacklog = isBacklog;
		this.isActive = isActive;
		this.isComplete = isComplete;
		this.projectKey = projectKey;
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

    public int getIsComplete() {
        return isComplete;
    }

    public void setIsComplete(int isComplete) {
        this.isComplete = isComplete;
    }

    public String getProjectKey() {
		return projectKey;
	}
	
	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}
}
