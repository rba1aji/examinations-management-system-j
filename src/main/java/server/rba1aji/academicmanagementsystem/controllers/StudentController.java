package server.rba1aji.academicmanagementsystem.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.security.AllowedRoles;
import server.rba1aji.academicmanagementsystem.security.JWToken;
import server.rba1aji.academicmanagementsystem.models.Student;
import server.rba1aji.academicmanagementsystem.services.IStudentService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    IStudentService studentService;

    @Autowired
    JWToken jwToken;

    @AllowedRoles({"admin"})
    @PostMapping("/register")
    public ResponseEntity<Map<String, Student>> register(@RequestBody Student newstudent) throws Exception {
        Student student = studentService.register(newstudent);
        Map<String, Student> response = new HashMap<>();
        response.put("student", newstudent);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @AllowedRoles({"admin"})
    @PostMapping("/registerMultiple")
    public ResponseEntity<Map<String, String>> registerMultiple(@RequestBody List<Student> studentList) throws AuthException {
        String message = studentService.registerMultiple(studentList);
        var res = new HashMap<String, String>();
        res.put("message", message);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody HashMap<String, String> map) {
        Student student = studentService.getByIdDob(
                Long.parseLong(map.get("id")),
                map.get("dateofbirth")
        );

        var res = new HashMap<String, Object>();
        res.put("token", jwToken.generateJWTToken("student"));
        student.setDateofbirth(null);
        res.put("student", student);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin", "faculty"})
    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Student>>> getAll() {
        List<Student> studentList = studentService.getAll();
        var res = new HashMap<String, List<Student>>();
        res.put("studentsList", studentList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin", "faculty"})
    @GetMapping("/getByBranchidList")
    public ResponseEntity<Map<String, List<Student>>> getByBranches(@RequestParam List<String> branchidList) {
        List<Student> studentList = studentService.getByBranchidList(branchidList);
        var res = new HashMap<String, List<Student>>();
        res.put("students", studentList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Map<String, Student>> update(@PathVariable Long id, @RequestParam Student student) throws Exception {
        studentService.update(id, student);
        Student updatedStudent = studentService.getById(id);

        var res = new HashMap<String, Student>();
        res.put("student", updatedStudent);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin", "faculty"})
    @GetMapping("/getByStartidEndid")
    public ResponseEntity<Map<String, List<Student>>> getByStartidEndid(@RequestParam Long startid, @RequestParam Long endid) {
        List<Student> studentList = studentService.getByStartidEndid(startid, endid);

        var res = new HashMap<String, List<Student>>();
        res.put("students", studentList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
