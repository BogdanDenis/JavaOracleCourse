package issuetracker.user_story;

public class UserStoryDescriptionDTO {
	private String key;
	private String description;
	
	public UserStoryDescriptionDTO() {}
	
	public UserStoryDescriptionDTO(String key, String description) {
		this.key = key;
		this.description = description;
	}
	
	public String getKey() {
		return key;
	}
	
	public void setKey(String key) {
		this.key = key;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
}
