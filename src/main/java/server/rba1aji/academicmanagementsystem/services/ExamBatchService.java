package server.rba1aji.academicmanagementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.ExamBatch;
import server.rba1aji.academicmanagementsystem.repositories.IExamBatchRepo;

import java.util.List;

@Service
@Transactional
public class ExamBatchService implements IExamBatchService {
    @Autowired
    IExamBatchRepo examBatchRepo;

    @Override
    public void register(ExamBatch batch) {
        System.out.println(batch.toString());
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

    @Override
    public List<ExamBatch> getActive() {
        return examBatchRepo.getActive();
    }

    @Override
    public List<ExamBatch> getActiveByFacultyid(String facultyid) {
        return examBatchRepo.getActiveBatchesByFacultyid(facultyid);
    }

    @Override
    public ExamBatch getById(Integer id) {
        return examBatchRepo.getById(id);
    }
}
