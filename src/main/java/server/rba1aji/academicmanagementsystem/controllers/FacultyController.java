package server.rba1aji.academicmanagementsystem.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Faculty;
import server.rba1aji.academicmanagementsystem.services.IFacultyService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/faculties")
public class FacultyController {
    @Autowired
    IFacultyService facultyService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Faculty faculty) {
        facultyService.register(faculty);
        var res = new HashMap<String, String>();
        res.put("message", faculty.getFullname() + " is registered as faculty");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/registerMultiple")
    public ResponseEntity<Map<String, String>> registerMultiple(@RequestBody List<Faculty> facultyList) {
        facultyService.registerMultiple(facultyList);
        var res = new HashMap<String, String>();
        res.put("message", "Registration success for all faculties");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<Map<String, Faculty>> getByIdPassword(@RequestParam String id, @RequestParam String password) throws AuthException {
        Faculty faculty = facultyService.getByIdPassword(id, password);
        var res = new HashMap<String, Faculty>();
        res.put("faculty", faculty);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<Map<String, List<Faculty>>> getAll() {
        List<Faculty> facultyList = facultyService.getAll();
        var res = new HashMap<String, List<Faculty>>();
        res.put("faculties", facultyList);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

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
