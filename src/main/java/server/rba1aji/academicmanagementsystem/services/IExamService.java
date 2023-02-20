package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Branch;
import server.rba1aji.academicmanagementsystem.models.Exam;

import java.util.List;

public interface IExamService {
    void registerExamForBranches(Exam exam, List<String> branchidList);
    List<Branch> getBranchesByExamid(String examid);
}
