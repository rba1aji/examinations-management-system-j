package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Course;
import server.rba1aji.academicmanagementsystem.security.AllowedRoles;
import server.rba1aji.academicmanagementsystem.services.ICourseService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    @Autowired
    ICourseService courseService;

    @AllowedRoles({"admin"})
    @PostMapping("/register")
    public ResponseEntity<Map<String, Course>> register(@RequestBody Course newCourse) {
        var course = courseService.register(newCourse);
        var res = new HashMap<String, Course>();
        res.put("course", course);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin"})
    @PostMapping("/registerMultiple")
    public ResponseEntity<Map<String, String>> registerMultiple(@RequestBody List<Course> courseList) {
        String message = courseService.registerMultiple(courseList);
        var res = new HashMap<String, String>();
        res.put("message", message);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getByBranchidSemesterBatch")
    public ResponseEntity<Map<String, List<Course>>> getByDegBranchSemBatch(
            @RequestParam String branchid, @RequestParam Integer semester, @RequestParam String batch
    ) {
        List<Course> courseList = courseService.getByBranchidSemesterBatch(branchid, semester, batch);
        var res = new HashMap<String, List<Course>>();
        res.put("courses", courseList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/batch{batch}/semester{semester}/getByBranchidList")
    public ResponseEntity<Map<String, List<Course>>> getByBatchSemesterBranchList(
            @PathVariable("batch") String batch, @PathVariable("semester") Integer semester, @RequestParam List<String> branchidList
    ) {
        List<Course> courseList = new ArrayList<>();
        for (String branchid : branchidList) {
            courseList.addAll(courseService.getByBranchidSemesterBatch(branchid, semester, batch));
        }
        var res = new HashMap<String, List<Course>>();
        res.put("courses", courseList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Course>>> getAll() {
        List<Course> courseList = courseService.getAll();
        var res = new HashMap<String, List<Course>>();
        res.put("courses", courseList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{courseid}/getName")
    public ResponseEntity<Map<String, String>> getCourseNameById(@PathVariable String courseid) {
        var res = new HashMap<String, String>();
        res.put("courseName", courseService.getCourseNameById(courseid));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
