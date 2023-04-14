package server.rba1aji.academicmanagementsystem.exams.management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Branch;
import server.rba1aji.academicmanagementsystem.exams.management.models.Exam;
import server.rba1aji.academicmanagementsystem.exams.management.repositories.IBranchRepo;
import server.rba1aji.academicmanagementsystem.exams.management.repositories.IExamRepo;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ExamService implements IExamService {
    @Autowired
    IExamRepo examRepo;
    @Autowired
    IBranchRepo branchRepo;

    @Override
    public void registerExamForBranches(Exam exam, List<String> branchidList) {
        Integer examid = examRepo.create(exam);
        for (String branchid : branchidList) {
            examRepo.createExamForBranch(examid, branchid);
        }
    }

    @Override
    public List<Branch> getBranchesByExamid(Integer examid) {
        List<String> branchidList = examRepo.findBranchidlistByExamid(examid);
        List<Branch> branchList = new ArrayList<>();
        for (String branchid : branchidList) {
            branchList.add(branchRepo.findById(branchid));
        }
        return branchList;
    }

    @Override
    public List<Exam> getAll() {
        return examRepo.findAll();
    }

    @Override
    public String getExamNameByid(Integer id) {
        return examRepo.findExamNameById(id);
    }

    @Override
    public List<Exam> getByBatchSemester(String batch, Integer semester) {
        return examRepo.findByBatchSemster(batch, semester);
    }
}
