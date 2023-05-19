package server.rba1aji.academicmanagementsystem.users.management.services;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.exams.management.models.Student;

import java.util.List;

public interface IStudentService {
    Student register(Student newstudent) throws Exception;

    String registerMultiple(List<Student> studentList) throws AuthException;

    Student getByIdDob(Long id, String dateofbirth);

    List<Student> getAll();

    List<Student> getByBranchidList(List<String> branchidList);

    Student update(Long id, Student student) throws Exception;

    Student getById(Long id) throws Exception;
    List<Student> getByStartidEndid(Long startid, Long endid);

    Integer getYearOfStudy(Long id) throws Exception;
}
