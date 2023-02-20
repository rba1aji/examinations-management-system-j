package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Exam;

import java.sql.PreparedStatement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.ExamSQL.SQL_BRANCH_EXAM_CREATE;
import static server.rba1aji.academicmanagementsystem.sqlqueries.ExamSQL.SQL_EXAM_CREATE;

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
}
