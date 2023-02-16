package server.rba1aji.academicmanagementsystem.services;

import jakarta.annotation.Nullable;
import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Student;
import server.rba1aji.academicmanagementsystem.repositories.IStudentRepo;

import java.util.List;

@Service
@Transactional
public class StudentService implements IStudentService {
    @Autowired
    IStudentRepo studentRepo;

    @Override
    public Student register(Student student) throws Exception {
        String id = studentRepo.create(student);
        return studentRepo.getById(id);
    }

    @Override
    public Student getByIdDob(String id, String dateofbirth) {
        return studentRepo.getByIdDob(id, dateofbirth);
    }

    @Override
    public List<Student> getAll() {
        return null;
    }

    @Override
    public void registerMultiple(List<Student> studentList) throws AuthException {
        studentRepo.createMultiple(studentList);
    }
}
