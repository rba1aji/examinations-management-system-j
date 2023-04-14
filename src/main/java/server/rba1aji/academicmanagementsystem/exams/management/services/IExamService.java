package server.rba1aji.academicmanagementsystem.exams.management.services;

import server.rba1aji.academicmanagementsystem.exams.management.models.Branch;
import server.rba1aji.academicmanagementsystem.exams.management.models.Exam;

import java.util.List;

public interface IExamService {
    void registerExamForBranches(Exam exam, List<String> branchidList);
    List<Branch> getBranchesByExamid(Integer examid);
    List<Exam> getAll();
    String getExamNameByid(Integer id);
    List<Exam> getByBatchSemester(String batch, Integer semester);
}
