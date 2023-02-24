package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Course;

import java.util.List;

public interface ICourseRepo {
    String create(Course course);

    Course findById(String id);

    List<Course> findByBranchidSemesterBatch( String branchid, Integer semester, String batch);
    List<Course> findAll();
    Course update(Course updatedCourse);

    Course delete(Integer id);
}
