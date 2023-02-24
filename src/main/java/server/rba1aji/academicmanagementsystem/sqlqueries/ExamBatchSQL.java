package server.rba1aji.academicmanagementsystem.sqlqueries;

public class ExamBatchSQL {
    public static final String SQL_EXAMBATCH_CREATE = "INSERT INTO EXAM_BATCHES" +
            "(ID, NAME, START_STUDENTID, END_STUDENTID, STARTTIME, ENDTIME, FACULTYID, VENUE, COURSEID, EXAMID, BRANCHID) " +
            "VALUES( NEXTVAL('EXAM_BATCH_ID_SEQ'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    public static final String SQL_EXAMBATCH_FIND_ALL = "SELECT * FROM EXAM_BATCHES";
    public static final String SQL_EXAMBATCH_FIND_BY_BRANCHID_EXAMID = "SELECT * FROM EXAM_BATCHES " +
            "WHERE BRANCHID = ? AND EXAMID = ?";
}
