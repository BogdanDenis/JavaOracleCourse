package issuetracker.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/type")
public class TypeController {
	@Autowired
	TypeDAO typeDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public List<TypeDTO> getAllTypes() {
		return typeDAO.findAll();
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public void createType(@RequestBody TypeDTO typeDTO) {
		typeDAO.create(typeDTO);
	}
}
