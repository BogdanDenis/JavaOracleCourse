package issuetracker.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TypeDAO {
	
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	public List<TypeDTO> findAll() {
		List<TypeDTO> res = template.query(
			"SELECT typeName FROM Type",
			new TypeRowMapper()
		);
		
		return res;
	}
	
	public void create(TypeDTO typeDTO) {
		String SQL = "INSERT INTO Type(typeName) VALUES (:typeName)";
		Map params = new HashMap();
		params.put("typeName", typeDTO.getTypeName());
		template.update(SQL, params);
	}
}
