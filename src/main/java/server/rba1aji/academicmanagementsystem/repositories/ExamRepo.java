package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Exam;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.ExamSQL.*;

@Repository
@Transactional
public class ExamRepo implements IExamRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Integer create(Exam exam) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_EXAM_CREATE, Statement.RETURN_GENERATED_KEYS);
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
            PreparedStatement ps = con.prepareStatement(SQL_BRANCH_EXAM_CREATE);
            ps.setInt(1, examid);
            ps.setString(2, branchid);
            return ps;
        });
    }

    @Override
    public List<String> findBranchidlistByExamid(Integer examid) {
        return jdbcTemplate.query(SQL_BRANCH_EXAM_FIND_BRANCHIDS, new Object[]{examid}, (rs, rowNum) -> rs.getString("BRANCHID"));
    }

    @Override
    public List<Exam> findAll() {
        return jdbcTemplate.query(SQL_EXAM_FIND_ALL, examRowMapper);
    }

    @Override
    public String findExamNameById(Integer id) {
        return jdbcTemplate.queryForObject(SQL_FIND_EXAMNAME_BY_ID, new Object[]{id}, String.class);
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
