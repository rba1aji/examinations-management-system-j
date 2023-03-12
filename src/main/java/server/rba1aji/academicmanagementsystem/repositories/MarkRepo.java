package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Mark;

import java.sql.PreparedStatement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.MarkSQL.*;

@Repository
@Transactional
public class MarkRepo implements IMarkRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void update(Mark mark) {
        int count = jdbcTemplate.queryForObject(SQL_MARKS_COUNT_BY_STUDENTID_EXAMID_COURSEID,
                new Object[]{mark.getStudentid(), mark.getExamid(), mark.getCourseid()}, Integer.class);
        jdbcTemplate.update(con -> {
            PreparedStatement ps;
            if (count == 0)
                ps = con.prepareStatement(SQL_MARKS_INSERT);
            else
                ps = con.prepareStatement(SQL_MARKS_UPDATE);
            ps.setBoolean(1, mark.getAttendance());
            ps.setInt(2, mark.getMark());
            ps.setLong(3, mark.getStudentid());
            ps.setInt(4, mark.getExamid());
            ps.setString(5, mark.getCourseid());
            ps.setString(6,mark.getBranchid());
            return ps;
        });
    }

    @Override
    public void updateForList(List<Mark> markList) {
        for (Mark mark : markList) {
            update(mark);
        }
    }

    @Override
    public List<Mark> findByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid) {
        return jdbcTemplate.query(SQL_MARKS_GET_BY_BATCHID_EXAMID_COURSEID, new Object[]{batchid, examid, courseid}, markRowMapper);
    }

    private RowMapper<Mark> markRowMapper = (((rs, rowNum) ->
            new Mark(
                    rs.getLong("STUDENTID"),
                    rs.getBoolean("ATTENDANCE"),
                    rs.getInt("MARK"),
                    rs.getInt("EXAMID"),
                    rs.getString("COURSEID"),
                    rs.getString("BRANCHID")
            )));
}
