package server.rba1aji.academicmanagementsystem.models;

public class Course {
    private String id;
    private String name;
    private String degree;
    private String branch;
    private Integer semester;
    private String batch;

    public Course(String id, String name, String degree, String branch, Integer semester, String batch) {
        this.id = id;
        this.name = name;
        this.degree = degree;
        this.branch = branch;
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

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }
}
