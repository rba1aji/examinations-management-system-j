package server.rba1aji.academicmanagementsystem.repositories;

public class StudentsSQL {
    public static final String SQL_CREATE = "INSERT INTO STUDENTS(ID, DATEOFBIRTH, FULLNAME, DEGREE, BRANCH , SECTION, YEAROFJOIN, YEAROFPASSOUT, EMAIL, PHONE, ADDRESS)" +
            " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    public static final String SQL_FIND_BY_ID = "SELECT * FROM STUDENTS WHERE ID = ?";
    public static final String SQL_FIND_BY_ID_DOB = "SELECT * FROM STUDENTS WHERE ID = ? AND DATEOFBIRTH = ?";
}
