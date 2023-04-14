package server.rba1aji.academicmanagementsystem.exams.management.services;

import server.rba1aji.academicmanagementsystem.exams.management.models.Course;

import java.util.List;

public interface ICourseService {
    Course register(Course course);

    String registerMultiple(List<Course> courseList);

    List<Course> getByBranchidSemesterBatch(String branchid, Integer semester, String batch);

    Course update(Course course);

    List<Course> getAll();

    Course delete(Integer id);
    String getCourseNameById(String id);
}
