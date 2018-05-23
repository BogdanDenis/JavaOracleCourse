package issuetracker.developer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class DeveloperDAO {
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<DeveloperRespDTO> findAll() {
		try {
			List<DeveloperRespDTO> res = template.query(
					"SELECT id, name, email FROM Developer",
					new DeveloperRowMapper()
			);
			return res;
		} catch (Exception e) {
			return null;
		}
	}
	
	public DeveloperRespDTO findById(long id) {
		String SQL = "SELECT id, name, email FROM Developer WHERE id = :id";
		Map params = new HashMap();
		params.put("id", id);
		try {
			DeveloperRespDTO developer = template.queryForObject(SQL, params, new DeveloperRowMapper());
			return developer;
		} catch (Exception e) {
			return null;
		}
	}
	
	public DeveloperRespDTO findByEmail(String email) {
		String SQL = "SELECT id, name, email FROM Developer WHERE email = :email";
		Map params = new HashMap();
		params.put("email", email);
		try {
			DeveloperRespDTO developer = template.queryForObject(SQL, params, new DeveloperRowMapper());
			return developer;
		} catch (Exception e) {
			return null;
		}
	}

	public DeveloperDTO findByEmailWithPassword(String email) {
        String SQL = "SELECT name, email, password FROM Developer WHERE email = :email";
        Map params = new HashMap();
        params.put("email", email);
        try {
            DeveloperDTO developer = (DeveloperDTO)template.queryForObject(SQL, params, (resultSet, i) -> {
                    DeveloperDTO developerDTO = new DeveloperDTO();
                    developerDTO.setName(resultSet.getString("name"));
                    developerDTO.setEmail(resultSet.getString("email"));
                    developerDTO.setPassword(resultSet.getString("password"));
                    return developerDTO;
                }
            );
            return developer;
        } catch (Exception e) {
            return null;
        }
    }
	
	public DeveloperRespDTO create(DeveloperDTO developerDTO) {
		String SQL = "INSERT INTO Developer(name, email, password) VALUES(:name, :email, :password)";
		Map params = new HashMap();
		params.put("name", developerDTO.getName());
		params.put("email", developerDTO.getEmail());
		params.put("password", developerDTO.getPassword());
		try {
			template.update(SQL, params);
			return this.findByEmail(developerDTO.getEmail());
		} catch(Exception e) {
			return null;
		}
	}
}
