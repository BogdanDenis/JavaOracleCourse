package issuetracker.status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class StatusDAO {
	
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<StatusDTO> findAll() {
		List<StatusDTO> res = template.query(
			"SELECT statusName FROM Status",
			new StatusRowMapper()
		);
		
		return res;
	}
	
	public void create(StatusDTO statusDTO) {
		String SQL = "INSERT INTO Status(statusName) VALUES (:statusName)";
		Map params = new HashMap();
		params.put("statusName", statusDTO.getStatusName());
		template.update(SQL, params);
	}
}
