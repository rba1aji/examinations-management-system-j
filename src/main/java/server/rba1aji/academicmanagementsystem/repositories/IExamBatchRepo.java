package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.ExamBatch;

import java.util.List;

public interface IExamBatchRepo {
    void create(ExamBatch examBatch);
    List<ExamBatch> findByBranchidExamid(String branchid, String examid);
}
