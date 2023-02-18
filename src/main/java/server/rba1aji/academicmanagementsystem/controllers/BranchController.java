package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.rba1aji.academicmanagementsystem.models.Branch;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/branches")
public class BranchController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Branch>>> getAllBranches(){
        List<Branch> branchList = jdbcTemplate.query("SELECT * FROM BRANCHES", new Object[]{}, branchRowMapper);
        var res= new HashMap<String,List<Branch>>();
        res.put("branches",branchList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    private RowMapper<Branch> branchRowMapper = ((rs, rowNo) ->
            new Branch(
                    rs.getString("ID"),
                    rs.getString("NAME"),
                    rs.getString("DEGREEID")
            )
    );
}
