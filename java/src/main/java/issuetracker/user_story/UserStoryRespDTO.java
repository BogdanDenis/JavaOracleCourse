package issuetracker.user_story;

public class UserStoryRespDTO {
	private String key;
	private String name;
	private String description;
	private String status;
	private long sprintId;
	
	public UserStoryRespDTO() {}
	
	public UserStoryRespDTO(String key, String name, String description, String status, long sprintId) {
		this.key = key;
		this.name = name;
		this.description = description;
		this.status = status;
		this.sprintId = sprintId;
	}
	
	public String getKey() {
		return key;
	}
	
	public void setKey(String key) {
		this.key = key;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public long getSprintId() {
		return sprintId;
	}
	
	public void setSprintId(long sprintId) {
		this.sprintId = sprintId;
	}
}
