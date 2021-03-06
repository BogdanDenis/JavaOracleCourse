package issuetracker.project;

public class ProjectRespDTO {
	private long id;
	private String key;
	private String name;
	
	public ProjectRespDTO() {}
	
	public ProjectRespDTO(long id, String key,String name) {
		this.id = id;
		this.key = key;
		this.name = name;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
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
}
