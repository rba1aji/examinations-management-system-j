package server.rba1aji.academicmanagementsystem.users.management.controllers;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.rba1aji.academicmanagementsystem.security.JWToken;
import server.rba1aji.academicmanagementsystem.exams.management.models.Admin;
import server.rba1aji.academicmanagementsystem.security.AllowedRoles;
import server.rba1aji.academicmanagementsystem.users.management.services.IAdminService;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/admins")
public class AdminController {
    @Autowired
    IAdminService adminService;

    @Autowired
    JWToken jwToken;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> getByIdPassword(@RequestBody Map<String, String> map) throws AuthException {
        Admin admin = adminService.getByIdPassword(
                map.get("id"),
                map.get("password")
        );
        var res = new HashMap<String, Object>();
        res.put("token", jwToken.generateJWTToken("admin"));
        admin.setPassword(null);
        res.put("admin", admin);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @AllowedRoles({"admin"})
    @PutMapping("/{id}/changePassword")
    public ResponseEntity<Map<String, String>> changeAdminPassword(@PathVariable String id, @RequestParam String currentPassword, @RequestParam String newPassword) throws AuthException {
        adminService.changePassword(id, currentPassword, newPassword);
        HashMap<String, String> res = new HashMap<>();
        res.put("message", "Admin password is changed");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
