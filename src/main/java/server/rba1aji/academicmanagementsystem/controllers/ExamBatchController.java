package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.ExamBatch;
import server.rba1aji.academicmanagementsystem.services.IExamBatchService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/exambatches")
public class ExamBatchController {
    @Autowired
    IExamBatchService examBatchService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerBatch(@RequestBody ExamBatch examBatch) {
        examBatchService.register(examBatch);
        var res = new HashMap<String, String>();
        res.put("message", "Batch " + examBatch.getName() + " is register successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getByBranchidExamid")
    public ResponseEntity<Map<String, List<ExamBatch>>> getBatchesByBranchidExamid(
            @RequestParam String branchid, @RequestParam String examid) {
        List<ExamBatch> examBatchList = examBatchService.getByBranchidExamid(branchid, examid);

        var res = new HashMap<String, List<ExamBatch>>();
        res.put("examBatchList", examBatchList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
