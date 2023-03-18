package server.rba1aji.academicmanagementsystem.models;

import java.sql.Timestamp;

public class ExamBatch {
    private Integer id;
    private String name;
    private Long startStudentid;
    private Long endStudentid;
    private Timestamp starttime;
    private Timestamp endtime;
    private String facultyid;
    private String venue;
    private String courseid;
    private Integer examid;
    private String branchid;

    public ExamBatch() {

    }


    public ExamBatch(Integer id, String name, Long startStudentid, Long endStudentid, Timestamp starttime, Timestamp endtime, String facultyid, String venue, String courseid, Integer examid, String branchid) {
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

    @Override
    public String toString() {
        return "ExamBatch{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", startStudentid=" + startStudentid +
                ", endStudentid=" + endStudentid +
                ", starttime=" + starttime +
                ", endtime=" + endtime +
                ", facultyid='" + facultyid + '\'' +
                ", venue='" + venue + '\'' +
                ", courseid='" + courseid + '\'' +
                ", examid=" + examid +
                ", branchid='" + branchid + '\'' +
                '}';
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

    public Long getStartStudentid() {
        return startStudentid;
    }

    public void setStartStudentid(Long startStudentid) {
        this.startStudentid = startStudentid;
    }

    public Long getEndStudentid() {
        return endStudentid;
    }

    public void setEndStudentid(Long endStudentid) {
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
