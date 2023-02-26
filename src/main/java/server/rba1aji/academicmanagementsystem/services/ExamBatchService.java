package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.ExamBatch;
import server.rba1aji.academicmanagementsystem.repositories.IExamBatchRepo;

import java.util.List;

@Service
@Transactional
public class ExamBatchService implements IExamBatchService{
    @Autowired
    IExamBatchRepo examBatchRepo;

    @Override
    public void register(ExamBatch batch) {
        examBatchRepo.create(batch);
    }

    @Override
    public List<ExamBatch> getByBranchidExamidCourseid(String branchid, Integer examid, String courseid) {
        return examBatchRepo.findByBranchidExamidCourseid(branchid, examid, courseid);
    }

    @Override
    public void updateByid(Integer id, ExamBatch batch) {
        examBatchRepo.updateByid(id, batch);
    }
}
