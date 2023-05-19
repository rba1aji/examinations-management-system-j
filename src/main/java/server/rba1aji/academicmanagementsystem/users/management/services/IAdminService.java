package server.rba1aji.academicmanagementsystem.users.management.services;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.exams.management.models.Admin;

public interface IAdminService {
    Admin getByIdPassword(String id, String password) throws AuthException;
    void changePassword(String id, String currPwd, String newPwd) throws AuthException;
    String getServerUrl();
}
