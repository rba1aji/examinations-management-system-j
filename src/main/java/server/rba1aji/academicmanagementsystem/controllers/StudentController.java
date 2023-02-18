package server.rba1aji.academicmanagementsystem.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/register")
    public ResponseEntity<Map<String, Student>> register(@RequestBody Student newstudent) throws Exception {
        Student student = studentService.register(newstudent);
        Map<String, Student> response = new HashMap<>();
        response.put("student", newstudent);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/registerMultiple")
    public ResponseEntity<Map<String, String>> registerMultiple(@RequestBody List<Student> studentList) throws AuthException {
        String message = studentService.registerMultiple(studentList);
        var res = new HashMap<String, String>();
        res.put("message", message);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<Map<String, Student>> login(@RequestParam String id, @RequestParam String dateofbirth) {
        Student student = studentService.getByIdDob(id, dateofbirth);
        var res = new HashMap<String, Student>();
        res.put("student", student);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("getAll")
    public ResponseEntity<Map<String, List<Student>>> getAll() {
        List<Student> studentList = studentService.getAll();
        var res = new HashMap<String, List<Student>>();
        res.put("studentsList", studentList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Map<String, Student>> update(@PathVariable String id, @RequestParam Student student) throws Exception {
        studentService.update(id, student);
        Student updatedStudent = studentService.getById(id);

        var res = new HashMap<String, Student>();
        res.put("student", updatedStudent);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
