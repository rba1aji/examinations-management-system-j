package server.rba1aji.academicmanagementsystem.users.management.repositories;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.exams.management.models.Faculty;

import java.util.List;

public interface IFacultyRepo {
    void create(Faculty faculty);

    Faculty findByIdPassword(String id, String password) throws AuthException;

    List<Faculty> findAll();

    void changePassword(String id, String curPw, String newPw) throws AuthException;
}
