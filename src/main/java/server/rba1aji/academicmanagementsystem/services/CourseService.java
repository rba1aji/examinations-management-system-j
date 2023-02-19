package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Course;
import server.rba1aji.academicmanagementsystem.repositories.ICourseRepo;

import java.util.List;

@Service
@Transactional
public class CourseService implements ICourseService{
    @Autowired
    ICourseRepo courseRepo;

    @Override
    public Course register(Course course) {
        String id= courseRepo.create(course);
        return courseRepo.findById(id);
    }

    @Override
    public List<Course> getByDegreeBranchSemesterBatch(String degreeid, String branchid, Integer semester, String batch) {
        return courseRepo.findByDegreeBranchSemesterBatch(degreeid, branchid, semester, batch);
    }

    @Override
    public Course update(Course course) {
        return null;
    }

    @Override
    public List<Course> getAll() {
        return courseRepo.findAll();
    }

    @Override
    public Course delete(Integer id) {
        return null;
    }
}
