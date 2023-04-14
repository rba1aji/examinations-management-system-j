package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import server.rba1aji.academicmanagementsystem.exams.management.models.Course;

import java.util.List;

public interface ICourseRepo {
    String create(Course course);

    Course findById(String id);

    List<Course> findByBranchidSemesterBatch( String branchid, Integer semester, String batch);
    List<Course> findAll();
    Course update(Course updatedCourse);

    Course delete(Integer id);

    String findCourseNameById(String id);
}
