package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.models.Student;

import java.util.List;

public interface IStudentRepo {
    String create(Student student) throws AuthException;
    String createMultiple(List<Student> studentList) throws AuthException;
    Student getById(String id) throws Exception;
    Student getByIdDob(String id, String dateofbirth);
    List<Student> findAll();
}
