package server.rba1aji.academicmanagementsystem.users.management.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Admin;
import server.rba1aji.academicmanagementsystem.users.management.repositories.IAdminRepo;

@Service
@Transactional
public class AdminService implements IAdminService {

    @Autowired
    IAdminRepo adminRepo;

    @Override
    public Admin getByIdPassword(String id, String password) throws AuthException {
        return adminRepo.getByIdPassword(id, password);
    }

    @Override
    public void changePassword(String id, String currPwd, String newPwd) throws AuthException {
        adminRepo.changePassword(id, currPwd, newPwd);
    }

    @Override
    public String getServerUrl() {
        return adminRepo.getServerUrl();
    }
}
