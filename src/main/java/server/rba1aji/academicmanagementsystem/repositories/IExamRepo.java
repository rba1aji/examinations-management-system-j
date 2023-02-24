package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Exam;

import java.util.List;

public interface IExamRepo {
    Integer create(Exam exam);
    void createExamForBranch(Integer examid, String branchid);
    List<String> findBranchidlistByExamid(Integer examid);
    List<Exam> findAll();
}
