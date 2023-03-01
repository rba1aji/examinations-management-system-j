package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.models.Student;

import java.util.List;

public interface IStudentRepo {
    Long create(Student student) throws AuthException;
    String createMultiple(List<Student> studentList) throws AuthException;
    Student findById(Long id) throws Exception;
    Student findByIdDob(Long id, String dateofbirth);
    List<Student> findAll();
    List<Student> findByBranch(String branchid);
    void update(Long id, Student student);
    List<Student> findByStartEndId(Long startid, Long endid);
}
