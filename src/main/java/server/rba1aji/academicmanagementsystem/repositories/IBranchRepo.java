package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Branch;

import java.util.List;

public interface IBranchRepo {
    List<Branch> findAll();
    Branch findById(String branchid);
}
