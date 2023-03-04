package server.rba1aji.academicmanagementsystem.models;

public class Mark {
    private Long studentid;
    private Boolean attendance;
    private Integer mark;
    private Integer examid;
    private String courseid;

    public Mark(Long studentid, Boolean attendance, Integer mark, Integer examid, String courseid) {
        this.studentid = studentid;
        this.attendance = attendance;
        this.mark = mark;
        this.examid = examid;
        this.courseid = courseid;
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
}
