package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Admin;
import server.rba1aji.academicmanagementsystem.repositories.IAdminRepo;

public interface IAdminService {
    Admin getByIdPassword(String id, String password);
}
