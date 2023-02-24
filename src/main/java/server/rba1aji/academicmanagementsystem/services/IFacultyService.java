package server.rba1aji.academicmanagementsystem.services;

import server.rba1aji.academicmanagementsystem.models.Faculty;

import java.util.List;

public interface IFacultyService {
    void register(Faculty faculty);
    void registerMultiple(List<Faculty> facultyList);
    Faculty getByIdPassword(String id, String password);
    List<Faculty> getAll();
}
