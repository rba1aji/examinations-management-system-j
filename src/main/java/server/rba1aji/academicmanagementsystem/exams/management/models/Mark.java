package server.rba1aji.academicmanagementsystem.exams.management.models;

public class Mark {
    private Long studentid;
    private Boolean attendance;
    private Integer mark;
    private Integer examid;
    private String courseid;
    private String branchid;

    public Mark(){

    }
    public Mark(Long studentid, Boolean attendance, Integer mark, Integer examid, String courseid, String branchid) {
        this.studentid = studentid;
        this.attendance = attendance;
        this.mark = mark;
        this.examid = examid;
        this.courseid = courseid;
        this.branchid = branchid;
    }

    public Long getStudentid() {
        return studentid;
    }

    public void setStudentid(Long studentid) {
        this.studentid = studentid;
    }

    public Boolean getAttendance() {
        return attendance;
    }

    public void setAttendance(Boolean attendance) {
        this.attendance = attendance;
    }

    public Integer getMark() {
        return mark;
    }

    public void setMark(Integer mark) {
        this.mark = mark;
    }

    public Integer getExamid() {
        return examid;
    }

    public void setExamid(Integer examid) {
        this.examid = examid;
    }

    public String getCourseid() {
        return courseid;
    }

    public void setCourseid(String courseid) {
        this.courseid = courseid;
    }

    public String getBranchid() {
        return branchid;
    }

    public void setBranchid(String branchid) {
        this.branchid = branchid;
    }
}
