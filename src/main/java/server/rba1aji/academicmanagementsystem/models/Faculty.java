package server.rba1aji.academicmanagementsystem.models;

public class Faculty {
    private String id;
    private String password;
    private String fullname;
    private String department;
    private String designation;
    private String email;
    private String phone;

    public Faculty(String id, String password, String fullname, String department, String designation, String email, String phone) {
        this.id = id;
        this.password = password;
        this.fullname = fullname;
        this.department = department;
        this.designation = designation;
        this.email = email;
        this.phone = phone;
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

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
