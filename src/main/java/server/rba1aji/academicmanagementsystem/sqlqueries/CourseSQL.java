package server.rba1aji.academicmanagementsystem.sqlqueries;

public class CourseSQL {
    public static String SQL_COURSE_CREATE = "INSERT INTO COURSES(ID, NAME, DEGREE, BRANCH, SEMESTER, BATCH) " +
            "VALUES(?, ?, ?, ?, ?, ?)";
    public static String SQL_COURSE_FIND_BY_ID = "SELECT * FROM COURSES " +
            "WHERE ID = ?";
    public static String SQL_COURSE_UPDATE = "UPDATE COURSES " +
            "SET ID = ?, NAME = ?, DEGREEID = ?, BRANCHID = ?, SEMESTER = ?, BATCH = ? " +
            "WHERE ID = ?";
    public static String SQL_COURSE_DELETE = "DELETE " +
            "FROM COURSES " +
            "WHERE ID = ?";
    public static String SQL_COURSE_FIND_BY_DEGREE_BRANCH_SEMESTER_BATCH = "SELECT * FROM COURSES " +
            "WHERE DEGREE = ? AND BRANCH = ? AND SEMESTER = ? AND BATCH = ?";

}
