package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Course;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.CourseSQL.*;

@Repository
@Transactional
public class CourseRepo implements ICourseRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public String create(Course course) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_COURSE_CREATE, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, course.getId());
            ps.setString(2, course.getName());
            ps.setInt(3, course.getCredits());
            ps.setString(4, course.getDegreeid());
            ps.setString(5, course.getBranchid());
            ps.setInt(6, course.getSemester());
            ps.setString(7, course.getBatch());
            return ps;
        }, keyHolder);
        return (String) keyHolder.getKeys().get("ID");
    }

    @Override
    public Course findById(String id) {
        return jdbcTemplate.queryForObject(SQL_COURSE_FIND_BY_ID, new Object[]{id}, courseRowMapper);
    }

    @Override
    public List<Course> findByDegreeBranchSemesterBatch(String degreeid, String branchid, Integer semester, String batch) {
        return jdbcTemplate.query(
                SQL_COURSE_FIND_BY_DEGREE_BRANCH_SEMESTER_BATCH, new Object[]{degreeid, branchid, semester, batch}, courseRowMapper
        );
    }


    @Override
    public Course update(Course updatedCourse) {
        return null;
    }

    @Override
    public Course delete(Integer id) {
        return null;
    }

    private RowMapper<Course> courseRowMapper = ((rs, rowNo) -> (
            new Course(rs.getString("ID"),
                    rs.getString("NAME"),
                    rs.getInt("CREDITS"),
                    rs.getString("DEGREEID"),
                    rs.getString("BRANCHID"),
                    rs.getInt("SEMESTER"),
                    rs.getString("BATCH")
            )
    ));

}

