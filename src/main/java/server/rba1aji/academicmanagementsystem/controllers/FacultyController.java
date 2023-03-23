package server.rba1aji.academicmanagementsystem.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.configs.JWToken;
import server.rba1aji.academicmanagementsystem.models.Faculty;
import server.rba1aji.academicmanagementsystem.security.AdminOnly;
import server.rba1aji.academicmanagementsystem.security.FacultyOnly;
import server.rba1aji.academicmanagementsystem.services.IFacultyService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/faculties")
public class FacultyController {
    @Autowired
    IFacultyService facultyService;
    @Autowired
    JWToken jwToken;

    @AdminOnly
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Faculty faculty) {
        facultyService.register(faculty);
        var res = new HashMap<String, String>();
        res.put("message", faculty.getFullname() + " is registered as faculty");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AdminOnly
    @PostMapping("/registerMultiple")
    public ResponseEntity<Map<String, String>> registerMultiple(@RequestBody List<Faculty> facultyList) {
        facultyService.registerMultiple(facultyList);
        var res = new HashMap<String, String>();
        res.put("message", "Registration success for all faculties");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> getByIdPassword(@RequestBody HashMap<String, String> map) throws AuthException {
        Faculty faculty = facultyService.getByIdPassword(
                map.get("id"),
                map.get("password")
        );
        faculty.setPassword(null);

        var res = new HashMap<String, Object>();
        res.put("token", jwToken.generateJWTToken("faculty"));
        faculty.setPassword(null);
        res.put("faculty", faculty);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AdminOnly
    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Faculty>>> getAll() {
        List<Faculty> facultyList = facultyService.getAll().stream()
                .peek(f -> f.setPassword(null))
                .collect(Collectors.toList());
        var res = new HashMap<String, List<Faculty>>();
        res.put("faculties", facultyList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @FacultyOnly
    @AdminOnly
    @PutMapping("/{id}/changePassword")
    public ResponseEntity<Map<String, String>> changePassword(
            @PathVariable String id, @RequestParam String currentPassword, @RequestParam String newPassword
    ) throws AuthException {
        facultyService.changePassword(id, currentPassword, newPassword);
        var res = new HashMap<String, String>();
        res.put("message", "Password is changed");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
