package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.ExamBatch;
import server.rba1aji.academicmanagementsystem.exams.management.sqlqueries.ExamBatchSQL;

import java.sql.PreparedStatement;
import java.time.Duration;
import java.time.Instant;
import java.util.List;

@Repository
@Transactional
public class ExamBatchRepo implements IExamBatchRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void create(ExamBatch batch) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(ExamBatchSQL.SQL_EXAMBATCH_CREATE);
            ps.setString(1, batch.getName());
            ps.setLong(2, batch.getStartStudentid());
            ps.setLong(3, batch.getEndStudentid());
            ps.setTimestamp(4, batch.getStarttime());
            ps.setTimestamp(5, batch.getEndtime());
            ps.setString(6, batch.getFacultyid());
            ps.setString(7, batch.getVenue());
            ps.setString(8, batch.getCourseid());
            ps.setInt(9, batch.getExamid());
            ps.setString(10, batch.getBranchid());
            return ps;
        });
    }

    @Override
    public List<ExamBatch> findByBranchidExamidCourseid(String branchid, Integer examid, String courseid) {
        return jdbcTemplate.query(ExamBatchSQL.SQL_EXAMBATCH_FIND_BY_BRANCHID_EXAMID_COURSE_ID, new Object[]{branchid, examid, courseid}, examBatchRowMapper);
    }

    @Override
    public void updateByid(Integer id, ExamBatch batch) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(ExamBatchSQL.SQL_UPDATE_BY_ID);
            ps.setString(1, batch.getName());
            ps.setLong(2, batch.getStartStudentid());
            ps.setLong(3, batch.getEndStudentid());
            ps.setTimestamp(4, batch.getStarttime());
            ps.setTimestamp(5, batch.getEndtime());
            ps.setString(6, batch.getFacultyid());
            ps.setString(7, batch.getVenue());
            ps.setInt(8, id);
            return ps;
        });
    }

    @Override
    public List<ExamBatch> getActive() {
        Instant now = Instant.now().plus(Duration.ofHours(5).plusMinutes(30));
        return jdbcTemplate.query(ExamBatchSQL.SQL_EXAMBATCH_FIND_BY_MIN_TIME, new Object[]{java.sql.Timestamp.from(now)}, examBatchRowMapper);
    }

    @Override
    public List<ExamBatch> getActiveBatchesByFacultyid(String facultyid) {
        Instant now = Instant.now().plus(Duration.ofHours(5).plusMinutes(30));
        return jdbcTemplate.query(ExamBatchSQL.SQL_EXAMBATCH_FIND_BY_MIN_TIME_FACULTYID, new Object[]{java.sql.Timestamp.from(now), facultyid}, examBatchRowMapper);
    }

    @Override
    public ExamBatch getById(Integer id) {
        return jdbcTemplate.queryForObject(ExamBatchSQL.SQL_EXAMBATCH_FIND_BY_ID, new Object[]{id}, examBatchRowMapper);
    }


    private final RowMapper<ExamBatch> examBatchRowMapper = ((rs, rowNo) -> (
            new ExamBatch(
                    rs.getInt("ID"),
                    rs.getString("NAME"),
                    rs.getLong("START_STUDENTID"),
                    rs.getLong("END_STUDENTID"),
                    rs.getTimestamp("STARTTIME"),
                    rs.getTimestamp("ENDTIME"),
                    rs.getString("FACULTYID"),
                    rs.getString("VENUE"),
                    rs.getString("COURSEID"),
                    rs.getInt("EXAMID"),
                    rs.getString("BRANCHID")
            )
    ));
}
