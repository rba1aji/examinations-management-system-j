package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Exam;
import server.rba1aji.academicmanagementsystem.repositories.IExamRepo;

import java.util.List;

@Service
@Transactional
public class ExamService implements IExamService {
    @Autowired
    IExamRepo examRepo;

    @Override
    public void registerExamForBranches(Exam exam, List<String> branchidList) {
        examRepo.create(exam);
        for (String branchid : branchidList) {
            examRepo.createExamForBranch(exam.getId(), branchid);
        }
    }
}
