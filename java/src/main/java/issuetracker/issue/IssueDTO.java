package issuetracker.issue;

public class IssueDTO {
	private String id;
	private String type;
	private String name;
	private String description;
	private int creationDate;
	private long assigneeId;
	private long reporterId;
	private String status;
	private int estimationOriginal;
	private int estimationUsed;
	private long projectId;
	
	public IssueDTO() {}
	
	public IssueDTO(
			String id,
			String type,
			String name,
			String description,
			int creationDate,
			long assigneeId,
			long reporterId,
			String status,
			int estimationOriginal,
			int estimationUsed,
			long projectId) {
		this.id = id;
		this.type = type;
		this.name = name;
		this.description = description;
		this.creationDate = creationDate;
		this.assigneeId = assigneeId;
		this.reporterId = reporterId;
		this.status = status;
		this.estimationOriginal = estimationOriginal;
		this.estimationUsed = estimationUsed;
		this.projectId = projectId;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
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
	
	public int getCreationDate() {
		return creationDate;
	}
	
	public void setCreationDate(int creationDate) {
		this.creationDate = creationDate;
	}
	
	public long getAssigneeId() {
		return assigneeId;
	}
	
	public void setAssigneeId(long assigneeId) {
		this.assigneeId = assigneeId;
	}
	
	public long getReporterId() {
		return reporterId;
	}
	
	public void setReporterId(long reporterId) {
		this.reporterId = reporterId;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public int getEstimationOriginal() {
		return estimationOriginal;
	}
	
	public void setEstimationOriginal(int estimationOriginal) {
		this.estimationOriginal = estimationOriginal;
	}
	
	public int getEstimationUsed() {
		return estimationUsed;
	}
	
	public void setEstimationUsed(int estimationUsed) {
		this.estimationUsed = estimationUsed;
	}
	
	public long getProjectId() {
		return projectId;
	}
	
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
}