package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Exam;
import server.rba1aji.academicmanagementsystem.exams.management.sqlqueries.ExamSQL;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
@Transactional
public class ExamRepo implements IExamRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Integer create(Exam exam) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(ExamSQL.SQL_EXAM_CREATE, Statement.RETURN_GENERATED_KEYS);
//            ps.setString(1, exam.getId());
            ps.setString(1, exam.getName());
            ps.setInt(2, exam.getSemester());
            ps.setString(3, exam.getBatch());
            return ps;
        }, keyHolder);
        return (Integer) keyHolder.getKeys().get("ID");
    }

    @Override
    public void createExamForBranch(Integer examid, String branchid) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(ExamSQL.SQL_BRANCH_EXAM_CREATE);
            ps.setInt(1, examid);
            ps.setString(2, branchid);
            return ps;
        });
    }

    @Override
    public List<String> findBranchidlistByExamid(Integer examid) {
        return jdbcTemplate.query(ExamSQL.SQL_BRANCH_EXAM_FIND_BRANCHIDS, new Object[]{examid}, (rs, rowNum) -> rs.getString("BRANCHID"));
    }

    @Override
    public List<Exam> findAll() {
        return jdbcTemplate.query(ExamSQL.SQL_EXAM_FIND_ALL, examRowMapper);
    }

    @Override
    public String findExamNameById(Integer id) {
        return jdbcTemplate.queryForObject(ExamSQL.SQL_FIND_EXAMNAME_BY_ID, new Object[]{id}, String.class);
    }

    @Override
    public List<Exam> findByBatchSemster(String batch, Integer semester) {
        return jdbcTemplate.query(ExamSQL.SQL_EXAMS_FIND_BY_BATCH_SEMESTER, new Object[]{batch, semester}, examRowMapper);
    }

    private RowMapper<Exam> examRowMapper = ((rs, rowNo) ->
            new Exam(
                    rs.getInt("ID"),
                    rs.getString("NAME"),
                    rs.getInt("SEMESTER"),
                    rs.getString("BATCH")
            )
    );
}
