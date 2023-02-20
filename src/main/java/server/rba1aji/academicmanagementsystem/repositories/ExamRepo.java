package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Exam;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.ExamSQL.*;

@Repository
@Transactional
public class ExamRepo implements IExamRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void create(Exam exam) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_EXAM_CREATE);
            ps.setString(1, exam.getId());
            ps.setString(2, exam.getName());
            ps.setInt(3, exam.getSemester());
            ps.setString(4, exam.getBatch());
            return ps;
        });
    }

    @Override
    public void createExamForBranch(String examid, String branchid) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_BRANCH_EXAM_CREATE);
            ps.setString(1, examid);
            ps.setString(2, branchid);
            return ps;
        });
    }

    @Override
    public List<String> findBranchidlistByExamid(String examid) {
        return jdbcTemplate.query(SQL_BRANCH_EXAM_FIND_BRANCHIDS, new Object[]{examid}, (rs, rowNum) -> rs.getString("BRANCHID"));
    }
}
