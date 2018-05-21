package issuetracker.issue;

public class IssueLogDTO {
    private String key;
    private int time;

    public IssueLogDTO() {}

    public IssueLogDTO(String key, int time) {
        this.key = key;
        this.time = time;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }
}
