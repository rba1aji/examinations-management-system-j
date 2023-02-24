package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Faculty;

import java.util.List;

public interface IFacultyRepo {
    void create(Faculty faculty);

    Faculty findByIdPassword(String id, String password);

    List<Faculty> findAll();
}
