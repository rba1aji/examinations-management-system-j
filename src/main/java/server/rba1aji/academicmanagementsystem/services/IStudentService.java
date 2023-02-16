package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Student;

import java.util.List;

public interface IStudentService {
    Student register(Student student) throws Exception;
    Student getByIdDob(int id, String dateofbirth);
    List<Student> getAll();
}
