package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Branch;

import java.util.List;

public interface IBranchService {
    List<Branch> getAll();
    Branch getById(String id);
}
