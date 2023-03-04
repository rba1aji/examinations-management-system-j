package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Mark;

import java.util.List;

public interface IMarkRepo {
    public void update(Mark mark);
    public void updateForList(List<Mark> markList);
    public List<Mark> findByBatchidExamidCourseid(Integer batchid, Integer examid, String courseid);

}
