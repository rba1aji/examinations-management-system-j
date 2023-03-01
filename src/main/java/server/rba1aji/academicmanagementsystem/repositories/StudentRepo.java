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

import static server.rba1aji.academicmanagementsystem.sqlqueries.StudentSQL.*;

@Repository
@Transactional
public class StudentRepo implements IStudentRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Long create(Student student) throws AuthException {
        try {
            KeyHolder keyholder = new GeneratedKeyHolder();
            jdbcTemplate.update(con -> {
                PreparedStatement ps = con.prepareStatement(SQL_STUDENT_CREATE, Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, student.getId());
                ps.setString(2, student.getDateofbirth());
                ps.setString(3, student.getFullname());
                ps.setString(4, student.getDegreeid());
                ps.setString(5, student.getBranchid());
                ps.setString(6, student.getSection());
                ps.setString(7, student.getBatch());
                ps.setString(8, student.getPhone());
                return ps;
            }, keyholder);
            return (Long) keyholder.getKeys().get("ID");
        } catch (Exception e) {
            throw new AuthException("Error at student creation. " + e.getMessage());
        }
    }

    @Override
    public String createMultiple(List<Student> studentList) throws AuthException {
        String res = "";
        for (Student student : studentList) {
            try {
                create(student);
            } catch (Exception e) {
                res += e.getMessage();
            }
        }
        return res.equals("") ? "registration success for all students" : res;
    }

    @Override
    public Student findById(Long id) throws Exception {
        return jdbcTemplate.queryForObject(SQL_STUDENT_FIND_BY_ID, new Object[]{id}, studentRowMapper);
    }

    @Override
    public Student findByIdDob(Long id, String dateofbirth) {
        return jdbcTemplate.queryForObject(SQL_STUDENT_FIND_BY_ID_DOB, new Object[]{id, dateofbirth}, studentRowMapper);
    }

    @Override
    public List<Student> findAll() {
        return jdbcTemplate.query(SQL_STUDENT_FIND_ALL, studentRowMapper);
    }

    @Override
    public List<Student> findByBranch(String branchid) {
        return jdbcTemplate.query(SQL_STUDENT_FIND_BY_BRANCH, new Object[]{branchid}, studentRowMapper);
    }

    @Override
    public void update(Long id, Student st) {
        jdbcTemplate.update(SQL_STUDENT_UPDATE,
                new Object[]{
                        st.getId(), st.getDateofbirth(), st.getFullname(), st.getDegreeid(),
                        st.getBranchid(), st.getSection(), st.getBatch(), st.getPhone()
                });
    }

    @Override
    public List<Student> findByStartEndId(Long startid, Long endid) {
        return jdbcTemplate.query(SQL_STUDENT_FIND_BY_START_END_ID, new Object[]{startid, endid}, studentRowMapper);
    }

    private final RowMapper<Student> studentRowMapper = ((rs, rowNo) ->
            new Student(
                    rs.getLong("ID"),
                    rs.getString("DATEOFBIRTH"),
                    rs.getString("FULLNAME"),
                    rs.getString("DEGREEID"),
                    rs.getString("BRANCHID"),
                    rs.getString("SECTION"),
                    rs.getString("BATCH"),
                    rs.getString("PHONE")
            )
    );
}
