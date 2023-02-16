package server.rba1aji.academicmanagementsystem.models;

public class Student {
    private Integer id;
    private String dateofbirth;
    private String fullname;
    private String degree;
    private String branch;
    private String section;
    private String yearofjoin;
    private String yearofpassout;
    private String email;
    private String phone;
    private String address;
    private Boolean blocked;

    public Student() {
    }

    public Student(Integer id, String dateofbirth, String fullname, String degree, String branch, String section, String yearofjoin, String yearofpassout, String email, String phone, String address) {
        this.id = id;
        this.dateofbirth = dateofbirth;
        this.fullname = fullname;
        this.degree = degree;
        this.branch = branch;
        this.section = section;
        this.yearofjoin = yearofjoin;
        this.yearofpassout = yearofpassout;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.blocked = false;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(String dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getYearofjoin() {
        return yearofjoin;
    }

    public void setYearofjoin(String yearofjoin) {
        this.yearofjoin = yearofjoin;
    }

    public String getYearofpassout() {
        return yearofpassout;
    }

    public void setYearofpassout(String yearofpassout) {
        this.yearofpassout = yearofpassout;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getBlocked() {
        return blocked;
    }

    public void setBlocked(Boolean blocked) {
        this.blocked = blocked;
    }
}