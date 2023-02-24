package server.rba1aji.academicmanagementsystem.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.rba1aji.academicmanagementsystem.models.Branch;

import java.util.List;

@Repository
@Transactional
public class BranchRepo implements IBranchRepo{
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Branch> findAll(){
        return jdbcTemplate.query("SELECT * FROM BRANCHES", new Object[]{}, branchRowMapper);
    }

    @Override
    public Branch findById(String branchid) {
        return jdbcTemplate.queryForObject("SELECT * FROM BRANCHES WHERE ID = ?", new Object[]{branchid}, branchRowMapper);
    }


    private RowMapper<Branch> branchRowMapper = ((rs, rowNo) ->
            new Branch(
                    rs.getString("ID"),
                    rs.getString("NAME"),
                    rs.getString("DEGREEID")
            )
    );
}
