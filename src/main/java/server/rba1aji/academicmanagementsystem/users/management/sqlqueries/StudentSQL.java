package server.rba1aji.academicmanagementsystem.users.management.sqlqueries;

public class StudentSQL {
    public static final String SQL_STUDENT_CREATE = "INSERT INTO STUDENTS(ID, DATEOFBIRTH, FULLNAME, DEGREEID, BRANCHID , SECTION, BATCH, PHONE)" +
            " VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    public static final String SQL_STUDENT_FIND_BY_ID = "SELECT * FROM STUDENTS WHERE ID = ?";
    public static final String SQL_STUDENT_FIND_BY_ID_DOB = "SELECT * FROM STUDENTS WHERE ID = ? AND DATEOFBIRTH = ?";
    public static final String SQL_STUDENT_FIND_ALL = "SELECT * FROM STUDENTS";
    public static final String SQL_STUDENT_FIND_BY_BRANCH = "SELECT * FROM STUDENTS WHERE BRANCHID = ?";
    public static final String SQL_STUDENT_UPDATE = "UPDATE STUDENTS " +
            "SET ID = ?, DATEOFBIRTH = ?, FULLNAME = ?, DEGREEID = ?, BRANCHID = ? , SECTION = ?, BATCH = ?, PHONE = ?" +
            "WHERE ID = ?";
    public static final String SQL_STUDENT_FIND_BY_START_END_ID = "SELECT * FROM STUDENTS " +
            "WHERE ID >= ? AND ID <= ?";
}
