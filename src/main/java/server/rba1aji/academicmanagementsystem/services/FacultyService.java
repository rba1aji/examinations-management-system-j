package server.rba1aji.academicmanagementsystem.services;

import jakarta.security.auth.message.AuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Faculty;
import server.rba1aji.academicmanagementsystem.repositories.IFacultyRepo;

import java.util.List;

@Service
@Transactional
public class FacultyService implements IFacultyService{
    @Autowired
    IFacultyRepo facultyRepo;

    @Override
    public void register(Faculty faculty) {
        facultyRepo.create(faculty);
    }

    @Override
    public void registerMultiple(List<Faculty> facultyList) {
        for(Faculty faculty: facultyList){
            facultyRepo.create(faculty);
        }
    }

    @Override
    public Faculty getByIdPassword(String id, String password) throws AuthException {
        return facultyRepo.findByIdPassword(id, password);
    }

    @Override
    public List<Faculty> getAll() {
        return facultyRepo.findAll();
    }

    @Override
    public void changePassword(String id, String curPw, String newPw) throws AuthException {
        facultyRepo.changePassword(id, curPw, newPw);
    }
}
