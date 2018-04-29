package issuetracker.project;

public class ProjectDTO {
	private String name;
	
	public ProjectDTO() {}
	
	public ProjectDTO(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
