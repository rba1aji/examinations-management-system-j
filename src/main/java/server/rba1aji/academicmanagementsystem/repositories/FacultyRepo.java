package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Faculty;

import java.sql.PreparedStatement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.sqlqueries.FacultySQL.*;

@Repository
@Transactional
public class FacultyRepo implements IFacultyRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void create(Faculty faculty) {
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_FACULTY_CREATE);
            ps.setString(1, faculty.getId());
            ps.setString(2, faculty.getPassword());
            ps.setString(3, faculty.getFullname());
            ps.setString(4, faculty.getDepartment());
            ps.setString(5, faculty.getDesignation());
            ps.setString(6, faculty.getEmail());
            ps.setString(7, faculty.getPhone());
            return ps;
        });
    }

    @Override
    public Faculty findByIdPassword(String id, String password) {
        return jdbcTemplate.queryForObject(SQL_FACULTY_FIND_BY_ID_PASSWORD, new Object[]{id, password}, facultyRowMapper);
    }

    @Override
    public List<Faculty> findAll() {
        return jdbcTemplate.query(SQL_FIND_ALL, facultyRowMapper);
    }

    private final RowMapper<Faculty> facultyRowMapper = ((rs, rowNum) -> (
            new Faculty(
                    rs.getString("ID"),
                    rs.getString("PASSWORD"),
                    rs.getString("FULLNAME"),
                    rs.getString("DEPARTMENT"),
                    rs.getString("DESIGNATION"),
                    rs.getString("EMAIL"),
                    rs.getString("PHONE")
            )
    ));
}
