package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Exam;

import java.util.List;

public interface IExamRepo {
    void create(Exam exam);
    void createExamForBranch(String examid, String branchid);
    List<String> findBranchidlistByExamid(String examid);
}
