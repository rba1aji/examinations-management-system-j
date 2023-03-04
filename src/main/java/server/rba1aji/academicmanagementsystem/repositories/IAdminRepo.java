package server.rba1aji.academicmanagementsystem.repositories;

import server.rba1aji.academicmanagementsystem.models.Admin;

public interface IAdminRepo {
    public Admin getByIdPassword(String id, String password);
}
