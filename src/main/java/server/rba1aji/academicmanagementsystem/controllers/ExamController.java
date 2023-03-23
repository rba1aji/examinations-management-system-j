package server.rba1aji.academicmanagementsystem.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Branch;
import server.rba1aji.academicmanagementsystem.models.Exam;
import server.rba1aji.academicmanagementsystem.security.AdminOnly;
import server.rba1aji.academicmanagementsystem.services.IExamService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    @Autowired
    IExamService examService;

    ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerForBranchidList(@RequestBody Map<String, Object> request) {
        Exam exam = objectMapper.convertValue(request.get("exam"), Exam.class);
        List<String> branchidList = objectMapper.convertValue(request.get("branchidList"), new TypeReference<List<String>>() {
        });
        examService.registerExamForBranches(exam, branchidList);

        var res = new HashMap<String, String>();
        res.put("message", exam.getName() + " is registered");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{examid}/getBranches")
    public ResponseEntity<Map<String, List<Branch>>> getBranchesByExamid(@PathVariable Integer examid) {
        List<Branch> branchList = examService.getBranchesByExamid(examid);

        var res = new HashMap<String, List<Branch>>();
        res.put("branches", branchList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AdminOnly
    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Exam>>> getAll() {
        List<Exam> examList = examService.getAll();
        var res = new HashMap<String, List<Exam>>();
        res.put("exams", examList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("{examid}/getName")
    public ResponseEntity<Map<String, String>> getExamNameById(@PathVariable Integer examid) {
        var res = new HashMap<String, String>();
        res.put("examName", examService.getExamNameByid(examid));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getByBatchSemester")
    public ResponseEntity<Map<String, List<Exam>>> getExamsByBatchSemester(@RequestParam String batch, @RequestParam Integer semester) {
        var res = new HashMap<String, List<Exam>>();
        res.put("exams", examService.getByBatchSemester(batch, semester));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
