package server.rba1aji.academicmanagementsystem.exams.management.services;

import server.rba1aji.academicmanagementsystem.exams.management.models.ExamBatch;

import java.util.List;

public interface IExamBatchService {
    void register(ExamBatch batch);
    List<ExamBatch> getByBranchidExamidCourseid(String branchid, Integer examid, String courseid);
    void updateByid(Integer id, ExamBatch batch);
    List<ExamBatch> getActive();
    List<ExamBatch> getActiveByFacultyid(String facultyid);
    ExamBatch getById(Integer id);
}
