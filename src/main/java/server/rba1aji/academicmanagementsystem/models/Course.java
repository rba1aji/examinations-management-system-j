package server.rba1aji.academicmanagementsystem.models;

public class Course {
    private String id;
    private String name;
    private Integer credits;
    private String degreeid;
    private String branchid;
    private Integer semester;
    private String batch;

    public Course(){

    }

    public Course(String id, String name, Integer credits, String degreeid, String branchid, Integer semester, String batch) {
        this.id = id;
        this.name = name;
        this.credits = credits;
        this.degreeid = degreeid;
        this.branchid = branchid;
        this.semester = semester;
        this.batch = batch;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
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

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }
}
