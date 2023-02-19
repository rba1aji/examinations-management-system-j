package server.rba1aji.academicmanagementsystem.services;

import org.springframework.stereotype.Service;
import server.rba1aji.academicmanagementsystem.models.Course;

import java.util.List;

public interface ICourseService {
    Course register(Course course);
    String registerMultiple(List<Course> courseList);
    List<Course> getByDegreeBranchSemesterBatch(String degreeid, String branchid, Integer semester, String batch);
    Course update(Course course);
    List<Course> getAll();
    Course delete(Integer id);
}
