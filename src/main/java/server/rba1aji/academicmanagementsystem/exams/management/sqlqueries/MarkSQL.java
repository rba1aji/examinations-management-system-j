package server.rba1aji.academicmanagementsystem.exams.management.sqlqueries;

public class MarkSQL {
    public static final String SQL_MARKS_COUNT_BY_STUDENTID_EXAMID_COURSEID = "SELECT COUNT(*) FROM MARKS " +
            "WHERE STUDENTID = ? AND EXAMID = ? AND COURSEID = ?";
    public static final String SQL_MARKS_INSERT = "INSERT INTO MARKS(ATTENDANCE, MARK, STUDENTID, EXAMID, COURSEID, BRANCHID) " +
            "VALUES(?, ?, ?, ?, ?, ?)";
    public static final String SQL_MARKS_UPDATE = "UPDATE MARKS " +
            "SET ATTENDANCE = ?, MARK = ? " +
            "WHERE STUDENTID = ? AND EXAMID = ? AND COURSEID = ? AND BRANCHID = ? ";
    public static final String SQL_MARKS_GET_BY_BATCHID_EXAMID_COURSEID = "SELECT M.* FROM " +
            "MARKS M INNER JOIN EXAM_BATCHES EB " +
            "ON M.EXAMID = EB.EXAMID  AND  " +
            "M.COURSEID = EB.COURSEID  AND " +
            "M.STUDENTID BETWEEN EB.START_STUDENTID AND EB.END_STUDENTID " +
            "WHERE EB.ID = ? AND M.EXAMID = ? AND M.COURSEID = ?";

    public static final String SQL_MARKS_FINDBY_STUDENTID_EXAMID = "SELECT * FROM MARKS " +
            "WHERE STUDENTID = ? AND EXAMID = ?";
}