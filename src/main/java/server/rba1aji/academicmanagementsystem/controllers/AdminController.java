package server.rba1aji.academicmanagementsystem.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.models.Admin;
import server.rba1aji.academicmanagementsystem.services.IAdminService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admins")
public class AdminController {
    @Autowired
    IAdminService adminService;

    @GetMapping("/login")
    public ResponseEntity<Map<String, Admin>> getByIdPassword(@RequestParam String id, @RequestParam String password) throws AuthException {
        var res = new HashMap<String, Admin>();
        res.put("admin", adminService.getByIdPassword(id, password));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/{id}/changePassword")
    public ResponseEntity<Map<String, String>> changeAdminPassword(@PathVariable String id, @RequestParam String currentPassword, @RequestParam String newPassword) throws AuthException {
        adminService.changePassword(id, currentPassword, newPassword);
        HashMap<String, String> res = new HashMap<>();
        res.put("message", "Admin password is changed");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
