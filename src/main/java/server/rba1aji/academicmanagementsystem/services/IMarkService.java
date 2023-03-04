package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Mark;

import java.util.List;

public interface IMarkService {
    public void update(Mark mark);
    public void updateForList(List<Mark> markList);
    public List<Mark> getByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid);
}
