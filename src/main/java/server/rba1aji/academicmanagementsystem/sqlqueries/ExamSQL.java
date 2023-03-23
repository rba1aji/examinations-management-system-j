package server.rba1aji.academicmanagementsystem.sqlqueries;

public class ExamSQL {
    public static final String SQL_EXAM_CREATE = "INSERT INTO EXAMS(ID, NAME, SEMESTER, BATCH) " +
            "VALUES( NEXTVAL('EXAM_ID_SEQ'), ?, ?, ?)";
    public static final String SQL_EXAM_FIND_ALL = "SELECT * FROM EXAMS";
    public static final String SQL_EXAM_FIND_BY_ID = "SELECT * FROM EXAMS WHERE ID = ?";
    public static final String SQL_BRANCH_EXAM_CREATE = "INSERT INTO BRANCH_EXAM(EXAMID, BRANCHID) " +
            "VALUES(?, ?)";
    public static final String SQL_BRANCH_EXAM_FIND_BRANCHIDS = "SELECT * FROM BRANCH_EXAM " +
            "WHERE EXAMID = ?";
    public static final String SQL_FIND_EXAMNAME_BY_ID = "SELECT NAME FROM EXAMS WHERE ID = ?";
    public static final String SQL_EXAMS_FIND_BY_BATCH_SEMESTER = " SELECT * FROM EXAMS WHERE BATCH=? AND SEMESTER=?";
}
