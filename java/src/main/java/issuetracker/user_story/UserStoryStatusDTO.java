package issuetracker.user_story;

public class UserStoryStatusDTO {
	private String key;
	private String status;
	
	public UserStoryStatusDTO() {}
	
	public UserStoryStatusDTO(String key, String status) {
		this.key = key;
		this.status = status;
	}
	
	public String getKey() {
		return key;
	}
	
	public void setKey(String key) {
		this.key = key;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
}
