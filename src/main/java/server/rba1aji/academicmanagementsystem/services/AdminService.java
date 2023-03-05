package server.rba1aji.academicmanagementsystem.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Admin;
import server.rba1aji.academicmanagementsystem.repositories.IAdminRepo;
import server.rba1aji.academicmanagementsystem.services.IAdminService;

@Service
@Transactional
public class AdminService implements IAdminService {

    @Autowired
    IAdminRepo adminRepo;


    @Override
    public Admin getByIdPassword(String id, String password) throws AuthException {
        return adminRepo.getByIdPassword(id, password);
    }
}
