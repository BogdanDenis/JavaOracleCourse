package issuetracker.sprint;

public class SprintStatusDTO {
	private long id;
	private String status;
	
	public SprintStatusDTO() {}
	
	public SprintStatusDTO(long id, String status) {
		this.id = id;
		this.status = status;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
}
