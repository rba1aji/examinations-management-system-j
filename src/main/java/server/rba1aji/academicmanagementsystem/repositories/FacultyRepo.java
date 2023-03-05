package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import org.mindrot.jbcrypt.BCrypt;
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
        String hashedPw = BCrypt.hashpw(faculty.getPassword(), BCrypt.gensalt(10));
        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(SQL_FACULTY_CREATE);
            ps.setString(1, faculty.getId());
            ps.setString(2, hashedPw);
            ps.setString(3, faculty.getFullname());
            ps.setString(4, faculty.getDepartment());
            ps.setString(5, faculty.getDesignation());
            ps.setString(6, faculty.getEmail());
            ps.setString(7, faculty.getPhone());
            return ps;
        });
    }

    @Override
    public Faculty findByIdPassword(String id, String password) throws AuthException {
        Faculty faculty = jdbcTemplate.queryForObject(SQL_FACULTY_FINDBY_ID, new Object[]{id}, facultyRowMapper);
        if (BCrypt.checkpw(password, faculty.getPassword()))
            return faculty;
        throw new AuthException("INVALID PASSWORD");
    }

    @Override
    public List<Faculty> findAll() {
        return jdbcTemplate.query(SQL_FACULTY_FIND_ALL, facultyRowMapper);
    }

    @Override
    public void changePassword(String id, String curPw, String newPw) throws AuthException {
        Faculty faculty = jdbcTemplate.queryForObject(SQL_FACULTY_FINDBY_ID, new Object[]{id}, facultyRowMapper);
        if (BCrypt.checkpw(curPw, faculty.getPassword())) {
            jdbcTemplate.update(SQL_FACULTY_UPDATE_PASSWORD, new Object[]{
                    BCrypt.hashpw(newPw, BCrypt.gensalt(10)),
                    id
            });
        }
        else throw new AuthException("INVALID CURRENT PASSWORD");
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
