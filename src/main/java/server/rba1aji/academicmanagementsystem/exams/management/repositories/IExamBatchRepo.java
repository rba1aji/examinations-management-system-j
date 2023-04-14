package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import server.rba1aji.academicmanagementsystem.exams.management.models.ExamBatch;

import java.util.List;

public interface IExamBatchRepo  {
    void create(ExamBatch examBatch);
    List<ExamBatch> findByBranchidExamidCourseid(String branchid, Integer examid, String courseid);
    void updateByid(Integer id, ExamBatch examBatch);
    List<ExamBatch> getActive();
    List<ExamBatch> getActiveBatchesByFacultyid(String facultyid);
    ExamBatch getById(Integer id);
}
