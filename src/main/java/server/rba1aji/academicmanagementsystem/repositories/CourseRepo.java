package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Course;
import server.rba1aji.academicmanagementsystem.models.Student;

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
            ps.setString(3, course.getDegree());
            ps.setString(4, course.getBranch());
            ps.setInt(5, course.getSemester());
            ps.setString(6, course.getBatch());
            return ps;
        }, keyHolder);
        return (String) keyHolder.getKeys().get("ID");
    }

    @Override
    public Course findById(String id) {
        return jdbcTemplate.queryForObject(SQL_COURSE_FIND_BY_ID, new Object[]{id}, courseRowMapper);
    }

    @Override
    public List<Course> findByDegreeBranchSemesterBatch(String degree, String branch, Integer semester, String batch) {
        return jdbcTemplate.query(
                SQL_COURSE_FIND_BY_DEGREE_BRANCH_SEMESTER_BATCH, new Object[]{degree, branch, semester, batch}, courseRowMapper
        );
    }


    @Override
    public Course update(Course updatedCourse) {
        return null;
    }

    @Override
    public Course delete(Course course) {
        return null;
    }

    private RowMapper<Course> courseRowMapper = ((rs, rowNo) -> (
            new Course(rs.getString("ID"),
                    rs.getString("NAME"),
                    rs.getString("DEGREE"),
                    rs.getString("BRANCH"),
                    rs.getInt("SEMESTER"),
                    rs.getString("BATCH")
            )
    ));

}

