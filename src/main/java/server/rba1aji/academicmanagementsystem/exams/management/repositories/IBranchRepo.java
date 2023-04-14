package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import server.rba1aji.academicmanagementsystem.exams.management.models.Branch;

import java.util.List;

public interface IBranchRepo {
    List<Branch> findAll();
    Branch findById(String branchid);
}
