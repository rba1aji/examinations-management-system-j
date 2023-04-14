package server.rba1aji.academicmanagementsystem.users.management.sqlqueries;

public class AdminSQL {
    public static final String SQL_ADMINS_CREATE = "INSERT INTO ADMINS(ID, PASSWORD, FULLNAME) " +
            "VALUES(?, ?, ?)";
    public static final String SQL_ADMINS_FINDBY_ID_PASSWORD = "SELECT * FROM ADMINS WHERE ID = ? AND PASSWORD=?";
    public static final String SQL_ADMINS_FINDBY_ID = "SELECT * FROM ADMINS WHERE ID = ?";
    public static final String SQL_ADMINS_CHANGE_PASSWORD = "UPDATE ADMINS " +
            "SET PASSWORD = ? " +
            "WHERE ID = ?";
}
