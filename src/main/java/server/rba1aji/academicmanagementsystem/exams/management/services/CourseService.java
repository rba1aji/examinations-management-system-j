package server.rba1aji.academicmanagementsystem.exams.management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Course;
import server.rba1aji.academicmanagementsystem.exams.management.repositories.ICourseRepo;

import java.util.List;

@Service
@Transactional
public class CourseService implements ICourseService {
    @Autowired
    ICourseRepo courseRepo;

    @Override
    public Course register(Course course) {
        String id = courseRepo.create(course);
        return courseRepo.findById(id);
    }

    @Override
    public String registerMultiple(List<Course> courseList) {
        for (Course course : courseList) {
            courseRepo.create(course);
        }
        return "Registration success for all courses";
    }

    @Override
    public List<Course> getByBranchidSemesterBatch(String branchid, Integer semester, String batch) {
        return courseRepo.findByBranchidSemesterBatch(branchid, semester, batch);
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

    @Override
    public String getCourseNameById(String id) {
        return courseRepo.findCourseNameById(id);
    }
}
