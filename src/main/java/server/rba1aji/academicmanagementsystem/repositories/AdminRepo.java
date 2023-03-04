package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Admin;

import static server.rba1aji.academicmanagementsystem.sqlqueries.AdminSQL.SQL_ADMINS_FINDBY_ID_PASSWORD;

@Repository
@Transactional
public class AdminRepo implements IAdminRepo {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Admin getByIdPassword(String id, String password) {
        return jdbcTemplate.queryForObject(SQL_ADMINS_FINDBY_ID_PASSWORD, new Object[]{id, password}, adminRowMapper);
    }

    private RowMapper<Admin> adminRowMapper = (((rs, rowNum) ->
            new Admin(
                    rs.getString("ID"),
                    rs.getString("PASSWORD"),
                    rs.getString("FULLNAME")
            )
    ));
}
