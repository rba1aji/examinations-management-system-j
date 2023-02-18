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
    public List<Course> getByDegreeBranchSemesterBatch(String degree, String branch, Integer semester, String batch) {
        return courseRepo.findByDegreeBranchSemesterBatch(degree, branch, semester, batch);
    }

    @Override
    public Course update(Course course) {
        return null;
    }

    @Override
    public Course delete(Course course) {
        return null;
    }
}
