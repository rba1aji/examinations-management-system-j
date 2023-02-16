package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Student;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import static server.rba1aji.academicmanagementsystem.repositories.StudentsSQL.*;

@Repository
@Transactional
public class StudentRepo implements IStudentRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public String create(Student student) throws AuthException {
        try {
            KeyHolder keyholder = new GeneratedKeyHolder();
            jdbcTemplate.update(con -> {
                PreparedStatement ps = con.prepareStatement(SQL_CREATE, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, student.getId());
                ps.setString(2, student.getDateofbirth());
                ps.setString(3, student.getFullname());
                ps.setString(4, student.getDegree());
                ps.setString(5, student.getBranch());
                ps.setString(6, student.getSection());
                ps.setString(7, student.getYearofjoin());
                ps.setString(8, student.getYearofpassout());
                ps.setString(9, student.getEmail());
                ps.setString(10, student.getPhone());
                ps.setString(11, student.getAddress());
                return ps;
            }, keyholder);
            return (String) keyholder.getKeys().get("ID");
        } catch (Exception e) {
            throw new AuthException("Error at student creation. " + e.getMessage());
        }
    }

    @Override
    public void createMultiple(List<Student> studentList) throws AuthException {
        for(Student student : studentList ){
            create(student);
        }
    }

    @Override
    public Student getById(String id) throws Exception {
        return jdbcTemplate.queryForObject(SQL_FIND_BY_ID, new Object[]{id}, studentRowMapper);
    }

    @Override
    public Student getByIdDob(String id, String dateofbirth) {
        return jdbcTemplate.queryForObject(SQL_FIND_BY_ID_DOB, new Object[]{id, dateofbirth}, studentRowMapper);
    }

    private RowMapper<Student> studentRowMapper = ((rs, rowNo) ->
            new Student(rs.getString("ID"),
                    rs.getString("DATEOFBIRTH"),
                    rs.getString("FULLNAME"),
                    rs.getString("DEGREE"),
                    rs.getString("BRANCH"),
                    rs.getString("SECTION"),
                    rs.getString("YEAROFJOIN"),
                    rs.getString("YEAROFPASSOUT"),
                    rs.getString("EMAIL"),
                    rs.getString("PHONE"),
                    rs.getString("ADDRESS"))
    );
}
