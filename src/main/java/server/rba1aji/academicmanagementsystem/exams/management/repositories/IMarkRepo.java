package server.rba1aji.academicmanagementsystem.exams.management.repositories;

import server.rba1aji.academicmanagementsystem.exams.management.models.Mark;

import java.util.List;

public interface IMarkRepo {
    public void update(Mark mark);
    public void updateForList(List<Mark> markList);
    public List<Mark> findByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid);

    List<Mark> findByStudentidAndExamid(Long studentid, Integer examid);
}
