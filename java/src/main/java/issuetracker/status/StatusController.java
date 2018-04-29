package issuetracker.status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/status")
public class StatusController {
	@Autowired
	StatusDAO statusDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public List<StatusDTO> getAllStatuses() {
		return statusDAO.findAll();
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public void createStatus(@RequestBody StatusDTO statusDTO) {
		statusDAO.create(statusDTO);
	}
}
