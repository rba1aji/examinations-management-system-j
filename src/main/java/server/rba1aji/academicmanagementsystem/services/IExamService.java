package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Branch;
import server.rba1aji.academicmanagementsystem.models.Exam;

import java.util.List;

public interface IExamService {
    void registerExamForBranches(Exam exam, List<String> branchidList);
    List<Branch> getBranchesByExamid(Integer examid);
    List<Exam> getAll();
    String getExamNameByid(Integer id);
    List<Exam> getByBatchSemester(String batch, Integer semester);
}
