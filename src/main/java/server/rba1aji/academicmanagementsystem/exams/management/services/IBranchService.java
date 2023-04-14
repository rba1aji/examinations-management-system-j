package server.rba1aji.academicmanagementsystem.exams.management.services;

import server.rba1aji.academicmanagementsystem.exams.management.models.Branch;

import java.util.List;

public interface IBranchService {
    List<Branch> getAll();
    Branch getById(String id);
}
