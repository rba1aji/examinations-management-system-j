package server.rba1aji.academicmanagementsystem.sqlqueries;

public class MarkSQL {
    public static final String SQL_MARKS_COUNT_BY_STUDENTID_EXAMID_COURSEID = "SELECT COUNT(*) FROM MARKS " +
            "WHERE STUDENTID = ? AND EXAMID = ? AND COURSEID = ?";
    public static final String SQL_MARKS_INSERT = "INSERT INTO MARKS(ATTENDANCE, MARK, STUDENTID, EXAMID, COURSEID) " +
            "VALUES(?, ?, ?, ?, ?)";
    public static final String SQL_MARKS_UPDATE = "UPDATE MARKS " +
            "SET ATTENDANCE = ?, MARK = ? " +
            "WHERE STUDENTID = ? AND EXAMID = ? AND COURSEID = ? ";

}