package server.rba1aji.academicmanagementsystem.models;

public class Admin {
    private String id;
    private String password;
    private String fullname;

    public Admin(String id, String password, String fullname) {
        this.id = id;
        this.password = password;
        this.fullname = fullname;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
