package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import server.rba1aji.academicmanagementsystem.exams.management.models.Exam;

import java.util.List;

public interface IExamRepo {
    Integer create(Exam exam);

    void createExamForBranch(Integer examid, String branchid);

    List<String> findBranchidlistByExamid(Integer examid);

    List<Exam> findAll();

    String findExamNameById(Integer id);

    List<Exam> findByBatchSemster(String batch, Integer semester);
}
