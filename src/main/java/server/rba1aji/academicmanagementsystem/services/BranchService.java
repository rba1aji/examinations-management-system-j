package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Branch;
import server.rba1aji.academicmanagementsystem.repositories.IBranchRepo;

import java.util.List;

@Service
@Transactional
public class BranchService implements IBranchService{
    @Autowired
    IBranchRepo branchRepo;
    @Override
    public List<Branch> getAll() {
        return branchRepo.findAll();
    }
}
