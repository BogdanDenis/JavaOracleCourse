package issuetracker.developer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/developer")
public class DeveloperController {
	@Autowired
	DeveloperDAO developerDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllDevelopers() {
		List<DeveloperRespDTO> res = developerDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getDeveloper(@PathVariable("id") long id) {
		DeveloperRespDTO res = developerDAO.findById(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createDeveloper(@RequestBody DeveloperDTO developerDTO) {
		DeveloperRespDTO dev = developerDAO.findByEmail(developerDTO.getEmail());
		if (dev != null) {
			return new ResponseEntity<>("{\"err\": \"Email already registered\"}", HttpStatus.CONFLICT);
		}
		dev = developerDAO.create(developerDTO);
		return new ResponseEntity<>(dev, HttpStatus.CREATED);
	}
}
