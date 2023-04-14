package server.rba1aji.academicmanagementsystem.users.management.repositories;

import jakarta.security.auth.message.AuthException;
import server.rba1aji.academicmanagementsystem.exams.management.models.Admin;

public interface IAdminRepo {
    public Admin getByIdPassword(String id, String password) throws AuthException;
    public void changePassword(String id, String currPwd, String newPwd) throws AuthException;
}
