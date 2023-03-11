package server.rba1aji.academicmanagementsystem.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Admin;
import server.rba1aji.academicmanagementsystem.repositories.IAdminRepo;

public interface IAdminService {
    public Admin getByIdPassword(String id, String password) throws AuthException;
    public void changePassword(String id, String currPwd, String newPwd) throws AuthException;
}
