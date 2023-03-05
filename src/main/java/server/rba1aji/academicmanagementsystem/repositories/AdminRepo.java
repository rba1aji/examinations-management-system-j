package server.rba1aji.academicmanagementsystem.repositories;

import jakarta.security.auth.message.AuthException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Admin;

import static server.rba1aji.academicmanagementsystem.sqlqueries.AdminSQL.SQL_ADMINS_FINDBY_ID;
import static server.rba1aji.academicmanagementsystem.sqlqueries.AdminSQL.SQL_ADMINS_FINDBY_ID_PASSWORD;

@Repository
@Transactional
public class AdminRepo implements IAdminRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Admin getByIdPassword(String id, String password) throws AuthException {
        Admin admin = jdbcTemplate.queryForObject(SQL_ADMINS_FINDBY_ID, new Object[]{id}, adminRowMapper);
        if (!BCrypt.checkpw(password, admin.getPassword()))
            throw new AuthException("INVALID PASSWORD");
        return admin;
    }

    private RowMapper<Admin> adminRowMapper = (((rs, rowNum) ->
            new Admin(
                    rs.getString("ID"),
                    rs.getString("PASSWORD"),
                    rs.getString("FULLNAME")
            )
    ));
}
