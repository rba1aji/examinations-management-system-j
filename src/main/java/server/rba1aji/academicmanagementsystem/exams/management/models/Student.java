package server.rba1aji.academicmanagementsystem.exams.management.models;

public class Student {
    private Long id;
    private String dateofbirth;
    private String fullname;
    private String degreeid;
    private String branchid;
    private String section;
    private String batch;
    private String phone;

    public Student() {
    }

    public Student(Long id, String dateofbirth, String fullname, String degreeid, String branchid, String section, String batch, String phone) {
        this.id = id;
        this.dateofbirth = dateofbirth;
        this.fullname = fullname;
        this.degreeid = degreeid;
        this.branchid = branchid;
        this.section = section;
        this.batch = batch;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getDegreeid() {
        return degreeid;
    }

    public void setDegreeid(String degreeid) {
        this.degreeid = degreeid;
    }

    public String getBranchid() {
        return branchid;
    }

    public void setBranchid(String branchid) {
        this.branchid = branchid;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }
}