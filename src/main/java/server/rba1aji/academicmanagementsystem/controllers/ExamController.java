package server.rba1aji.academicmanagementsystem.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Exam;
import server.rba1aji.academicmanagementsystem.services.IExamService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static server.rba1aji.academicmanagementsystem.sqlqueries.ExamSQL.SQL_EXAM_FIND_ALL;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    IExamService examService;
    ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Map<String, Object> request) {
        Exam exam = objectMapper.convertValue(request.get("exam"), Exam.class);
        List<String> branchidList = objectMapper.convertValue(request.get("branchidList"), new TypeReference<List<String>>() {});
        examService.registerExamForBranches(exam, branchidList);

        var res = new HashMap<String, String>();
        res.put("message", exam.getName() + " is registered");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Exam>>> getAll() {
        List<Exam> examList = jdbcTemplate.query(SQL_EXAM_FIND_ALL, examRowMapper);
        var res = new HashMap<String, List<Exam>>();
        res.put("exams", examList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    private RowMapper<Exam> examRowMapper = ((rs, rowNo) ->
            new Exam(
                    rs.getString("ID"),
                    rs.getString("NAME"),
                    rs.getInt("SEMESTER"),
                    rs.getString("BATCH")
            )
    );
}
