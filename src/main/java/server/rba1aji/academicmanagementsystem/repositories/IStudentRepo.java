package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.models.Student;

import java.util.List;

public interface IStudentRepo {
    Integer create(Student student) throws AuthException;
    Student getById(int id) throws Exception;
    Student getByIdDob(int id, String dateofbirth);
}
