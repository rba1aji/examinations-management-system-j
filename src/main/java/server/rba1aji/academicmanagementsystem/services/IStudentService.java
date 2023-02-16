package server.rba1aji.academicmanagementsystem.services;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.models.Student;

import java.util.List;

public interface IStudentService {
    Student register(Student student) throws Exception;
    Student getByIdDob(String id, String dateofbirth);
    List<Student> getAll();
     void registerMultiple(List<Student> studentList) throws AuthException;
}
