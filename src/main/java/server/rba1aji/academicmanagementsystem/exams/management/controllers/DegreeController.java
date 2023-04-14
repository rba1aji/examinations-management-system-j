package server.rba1aji.academicmanagementsystem.exams.management.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.rba1aji.academicmanagementsystem.exams.management.models.Degree;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/degrees")
public class DegreeController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Degree>>> getAllDegrees() {
        List<Degree> degreeList = jdbcTemplate.query("SELECT * FROM DEGREES", new Object[]{}, degreeRowMapper);
        var res= new HashMap<String,List<Degree>>();
        res.put("degrees",degreeList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    private RowMapper<Degree> degreeRowMapper = ((rs, rowNo) ->
            new Degree(
                    rs.getString("ID"),
                    rs.getString("NAME")
            )
    );
}
