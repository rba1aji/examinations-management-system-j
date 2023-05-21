package server.rba1aji.academicmanagementsystem.exams.management.services;

import server.rba1aji.academicmanagementsystem.exams.management.models.Mark;

import java.util.List;

public interface IMarkService {
    public void update(Mark mark);
    public void updateForList(List<Mark> markList);
    public List<Mark> getByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid);

    List<Mark> getByStudentidExamid(Long studentid, Integer examid);
}