package issuetracker.auth;

public class Token {
    private long id;
    private String access_token;
    private String type;
    private boolean isAdmin;

    public Token() {}

    public Token(long id, String access_token, String type, boolean isAdmin) {
        this.id = id;
        this.access_token = access_token;
        this.type = type;
        this.isAdmin = isAdmin;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
