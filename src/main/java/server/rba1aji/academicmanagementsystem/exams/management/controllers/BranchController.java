package server.rba1aji.academicmanagementsystem.exams.management.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import server.rba1aji.academicmanagementsystem.exams.management.models.Branch;
import server.rba1aji.academicmanagementsystem.exams.management.services.IBranchService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/branches")
public class BranchController {
    @Autowired
    IBranchService branchService;

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Branch>>> getAll() {
        List<Branch> branchList = branchService.getAll();

        var res = new HashMap<String, List<Branch>>();
        res.put("branches", branchList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getById")
    public ResponseEntity<Map<String, Branch>> getById(@RequestParam String id) {
        var res = new HashMap<String, Branch>();
        res.put("branch", branchService.getById(id));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
