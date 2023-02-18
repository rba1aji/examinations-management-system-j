package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Course;

import java.util.List;

public interface ICourseRepo {
    String create(Course course);

    Course findById(String id);

    List<Course> findByDegreeBranchSemesterBatch(String degree, String branch, Integer semester, String batch);
    Course update(Course updatedCourse);

    Course delete(Course course);
}
