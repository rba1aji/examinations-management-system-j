package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.ExamBatch;

import java.util.List;

public interface IExamBatchService {
    void register(ExamBatch batch);
    List<ExamBatch> getByBranchidExamid(String branchid, String examid);
}
