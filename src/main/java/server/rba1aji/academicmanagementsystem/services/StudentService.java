package server.rba1aji.academicmanagementsystem.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Student;
import server.rba1aji.academicmanagementsystem.repositories.IStudentRepo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@Transactional
public class StudentService implements IStudentService {
    @Autowired
    IStudentRepo studentRepo;

    @Override
    public Student register(Student newstudent) throws Exception {
        String id = studentRepo.create(newstudent);
        return studentRepo.findById(id);
    }

    @Override
    public Student getByIdDob(String id, String dateofbirth) {
        return studentRepo.findByIdDob(id, dateofbirth);
    }

    @Override
    public String registerMultiple(List<Student> studentList) throws AuthException {
        return studentRepo.createMultiple(studentList);
    }

    @Override
    public List<Student> getAll() {
        List<Student> students = studentRepo.findAll();
        Collections.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return Long.compare(Long.parseLong(o1.getId()), Long.parseLong(o2.getId()));
            }
        });
        return students;
    }

    @Override
    public List<Student> getByBranchidList(List<String> branchidList) {
        List<Student> studentList = new ArrayList<>();
        for(String branchid: branchidList){
            studentList.addAll(studentRepo.findByBranch(branchid));
        }
        return studentList;
    }

    @Override
    public Student update(String id, Student student) throws Exception {
        studentRepo.update(id, student);
        return studentRepo.findById(student.getId());
    }

    @Override
    public Student getById(String id) throws Exception {
        return studentRepo.findById(id);
    }
}
