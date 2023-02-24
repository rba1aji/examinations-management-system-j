package server.rba1aji.academicmanagementsystem.models;

import java.sql.Timestamp;

public class ExamBatch {
    private Integer id;
    private String name;
    private String startStudentid;
    private String endStudentid;
    private Timestamp starttime;
    private Timestamp endtime;
    private String facultyid;
    private String venue;
    private String courseid;
    private Integer examid;
    private String branchid;

    public ExamBatch(Integer id, String name, String startStudentid, String endStudentid, Timestamp starttime, Timestamp endtime, String facultyid, String venue, String courseid, Integer examid, String branchid) {
        this.id = id;
        this.name = name;
        this.startStudentid = startStudentid;
        this.endStudentid = endStudentid;
        this.starttime = starttime;
        this.endtime = endtime;
        this.facultyid = facultyid;
        this.venue = venue;
        this.courseid = courseid;
        this.examid = examid;
        this.branchid = branchid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartStudentid() {
        return startStudentid;
    }

    public void setStartStudentid(String startStudentid) {
        this.startStudentid = startStudentid;
    }

    public String getEndStudentid() {
        return endStudentid;
    }

    public void setEndStudentid(String endStudentid) {
        this.endStudentid = endStudentid;
    }

    public Timestamp getStarttime() {
        return starttime;
    }

    public void setStarttime(Timestamp starttime) {
        this.starttime = starttime;
    }

    public Timestamp getEndtime() {
        return endtime;
    }

    public void setEndtime(Timestamp endtime) {
        this.endtime = endtime;
    }

    public String getFacultyid() {
        return facultyid;
    }

    public void setFacultyid(String facultyid) {
        this.facultyid = facultyid;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getCourseid() {
        return courseid;
    }

    public void setCourseid(String courseid) {
        this.courseid = courseid;
    }

    public Integer getExamid() {
        return examid;
    }

    public void setExamid(Integer examid) {
        this.examid = examid;
    }

    public String getBranchid() {
        return branchid;
    }

    public void setBranchid(String branchid) {
        this.branchid = branchid;
    }
}
