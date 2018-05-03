package issuetracker.user_story;

public class UserStoryDTO {
	private String name;
	private String description;
	private long sprintId;
	
	public UserStoryDTO() {}
	
	public UserStoryDTO(String name, String description, long sprintId) {
		this.name = name;
		this.description = description;
		this.sprintId = sprintId;
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
	
	public long getSprintId() {
		return sprintId;
	}
	
	public void setSprintId(long sprintId) {
		this.sprintId = sprintId;
	}
}
