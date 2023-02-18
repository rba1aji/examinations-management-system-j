package server.rba1aji.academicmanagementsystem.sqlqueries;

public class StudentSQL {
    public static final String SQL_STUDENT_CREATE = "INSERT INTO STUDENTS(ID, DATEOFBIRTH, FULLNAME, DEGREE, BRANCH , SECTION, YEAROFJOIN, YEAROFPASSOUT, EMAIL, PHONE, ADDRESS)" +
            " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    public static final String SQL_STUDENT_FIND_BY_ID = "SELECT * FROM STUDENTS WHERE ID = ?";
    public static final String SQL_STUDENT_FIND_BY_ID_DOB = "SELECT * FROM STUDENTS WHERE ID = ? AND DATEOFBIRTH = ?";
    public static final String SQL_STUDENT_FIND_ALL = "SELECT * FROM STUDENTS";
}
