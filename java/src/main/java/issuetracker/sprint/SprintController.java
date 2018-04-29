package issuetracker.sprint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/sprint")
public class SprintController {
	@Autowired
	SprintDAO sprintDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllSprints() {
		List<SprintRespDTO> res = sprintDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getSprint(@PathVariable("id") long id) {
		SprintRespDTO res = sprintDAO.findById(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createSprint(@RequestBody SprintDTO sprintDTO) {
		SprintRespDTO res = sprintDAO.create(sprintDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/changeStatus", method = RequestMethod.PATCH,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> changeStatus(@RequestBody SprintStatusDTO sprintStatusDTO) {
		SprintRespDTO res = sprintDAO.changeStatus(sprintStatusDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
}
