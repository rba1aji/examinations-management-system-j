package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Course;
import server.rba1aji.academicmanagementsystem.services.ICourseService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    @Autowired
    ICourseService courseService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Course>> register(Course newCourse) {
        var course = courseService.register(newCourse);
        var res = new HashMap<String, Course>();
        res.put("course", course);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getByDegreeBranchSemesterBatch")
    public ResponseEntity<Map<String, List<Course>>> getByDegBranchSemBatch(
            @RequestParam String degree, @RequestParam String branch, @RequestParam Integer semester, @RequestParam String batch){
        List<Course> courseList = courseService.getByDegreeBranchSemesterBatch(degree, branch, semester, batch);
        var res = new HashMap<String, List<Course>>();
        res.put("courseList", courseList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
