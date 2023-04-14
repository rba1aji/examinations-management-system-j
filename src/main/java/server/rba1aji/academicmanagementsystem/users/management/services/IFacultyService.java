package server.rba1aji.academicmanagementsystem.users.management.services;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.exams.management.models.Faculty;

import java.util.List;

public interface IFacultyService {
    void register(Faculty faculty);
    void registerMultiple(List<Faculty> facultyList);
    Faculty getByIdPassword(String id, String password) throws AuthException;
    List<Faculty> getAll();
    void changePassword(String id, String curPw, String newPw) throws AuthException;
}
