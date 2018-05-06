package issuetracker.user_story;

public class UserStorySprintDTO {
	private String key;
	private long sprintId;
	
	public UserStorySprintDTO() {}
	
	public UserStorySprintDTO(String key, long sprintId) {
		this.key = key;
		this.sprintId = sprintId;
	}
	
	public String getKey() {
		return key;
	}
	
	public void setKey(String key) {
		this.key = key;
	}
	
	public long getSprintId() {
		return sprintId;
	}
	
	public void setSprintId(long sprintId) {
		this.sprintId = sprintId;
	}
}
