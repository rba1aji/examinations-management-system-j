package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Course;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.exams.management.sqlqueries.CourseSQL.*;

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
    public List<Course> findByBranchidSemesterBatch(String branchid, Integer semester, String batch) {
        return jdbcTemplate.query(
                SQL_COURSE_FIND_BY_BRANCH_SEMESTER_BATCH, new Object[]{branchid, semester, batch}, courseRowMapper
        );
    }

    @Override
    public List<Course> findAll() {
        return jdbcTemplate.query(SQL_COURSE_FIND_ALL, courseRowMapper);
    }


    @Override
    public Course update(Course updatedCourse) {
        return null;
    }

    @Override
    public Course delete(Integer id) {
        return null;
    }

    @Override
    public String findCourseNameById(String id) {
        return jdbcTemplate.queryForObject(SQL_COURSES_FIND_NAME_BY_ID, new Object[]{id}, String.class);
    }

    private final RowMapper<Course> courseRowMapper = ((rs, rowNo) -> (
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

