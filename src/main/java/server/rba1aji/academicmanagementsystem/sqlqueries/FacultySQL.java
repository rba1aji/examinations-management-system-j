package server.rba1aji.academicmanagementsystem.sqlqueries;

public class FacultySQL {
    public static final String SQL_FACULTY_CREATE = "INSERT INTO FACULTIES(ID, PASSWORD, FULLNAME, DEPARTMENT, DESIGNATION, EMAIL, PHONE) " +
            "VALUES(?, ?, ?, ?, ?, ?, ?)";
    public static final String SQL_FACULTY_FIND_BY_ID_PASSWORD = "SELECT * FROM FACULTIES WHERE ID = ? AND PASSWORD = ?";
    public static final String SQL_FACULTY_FIND_ALL = "SELECT * FROM FACULTIES";
    public static final String SQL_FACULTY_FINDBY_ID = "SELECT * FROM FACULTIES WHERE ID = ?";
    public static final String SQL_FACULTY_UPDATE_PASSWORD = "UPDATE FACULTIES " +
            "SET PASSWORD = ? " +
            "WHERE ID = ?";
}
