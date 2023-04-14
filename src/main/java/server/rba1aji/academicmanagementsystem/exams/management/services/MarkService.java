package server.rba1aji.academicmanagementsystem.exams.management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.exams.management.models.Mark;
import server.rba1aji.academicmanagementsystem.exams.management.repositories.IMarkRepo;

import java.util.List;

@Service
@Transactional
public class MarkService implements IMarkService {
    @Autowired
    IMarkRepo markRepo;

    @Override
    public void update(Mark mark) {
        markRepo.update(mark);
    }

    @Override
    public void updateForList(List<Mark> markList) {
        markRepo.updateForList(markList);
    }

    @Override
    public List<Mark> getByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid) {
        return markRepo.findByBatchidExamidCourseid(batchid, examid, courseid);
    }

    @Override
    public List<Mark> getByStudentidExamid(Long studentid, Integer examid) {
        return markRepo.findByStudentidAndExamid(studentid, examid);
    }
}
