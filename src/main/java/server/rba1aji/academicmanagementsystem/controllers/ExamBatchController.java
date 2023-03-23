package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.ExamBatch;
import server.rba1aji.academicmanagementsystem.security.AllowedRoles;
import server.rba1aji.academicmanagementsystem.services.IExamBatchService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/exambatches")
public class ExamBatchController {
    @Autowired
    IExamBatchService examBatchService;

    @AllowedRoles({"admin"})
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerBatch(@RequestBody ExamBatch examBatch) {
        examBatchService.register(examBatch);
        var res = new HashMap<String, String>();
        res.put("message", "Batch " + examBatch.getName() + " is register successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getByBranchidExamidCourseid")
    public ResponseEntity<Map<String, List<ExamBatch>>> getBatchesByBranchidExamidCourseid(
            @RequestParam String branchid, @RequestParam Integer examid, @RequestParam String courseid) {
        List<ExamBatch> examBatchList = examBatchService.getByBranchidExamidCourseid(branchid, examid, courseid);

        var res = new HashMap<String, List<ExamBatch>>();
        res.put("examBatches", examBatchList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin"})
    @PutMapping("/{id}/update")
    public ResponseEntity<Map<String, String>> update(@PathVariable Integer id, @RequestBody ExamBatch batch) {
        examBatchService.updateByid(id, batch);

        var res = new HashMap<String, String>();
        res.put("message", "batch " + batch.getName() + " is updated successfully");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin","faculty"})
    @GetMapping("/active")
    public ResponseEntity<Map<String, List<ExamBatch>>> getActiveBatches() {
        var res = new HashMap<String, List<ExamBatch>>();
        res.put("examBatches", examBatchService.getActive());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin","faculty"})
    @GetMapping("/activeByFacultyid{facultyid}")
    public ResponseEntity<Map<String, List<ExamBatch>>> getActiveBatchesByFacultyid(@PathVariable String facultyid) {
        var res = new HashMap<String, List<ExamBatch>>();
        res.put("examBatches", examBatchService.getActiveByFacultyid(facultyid));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin","faculty"})
    @GetMapping("/getById/{id}")
    public ResponseEntity<Map<String, ExamBatch>> getById(@PathVariable Integer id) {
        var res = new HashMap<String, ExamBatch>();
        res.put("examBatch", examBatchService.getById(id));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
