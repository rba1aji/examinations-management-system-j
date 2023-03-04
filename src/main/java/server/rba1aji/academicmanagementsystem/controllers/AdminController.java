package server.rba1aji.academicmanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import server.rba1aji.academicmanagementsystem.models.Admin;
import server.rba1aji.academicmanagementsystem.services.IAdminService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admins")
public class AdminController {
    @Autowired
    IAdminService adminService;

    @GetMapping("login")
    public ResponseEntity<Map<String, Admin>> getByIdPassword(@RequestParam String id, @RequestParam String password) {
        var res = new HashMap<String, Admin>();
        res.put("admin", adminService.getByIdPassword(id, password));
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
