package issuetracker.sprint;

import issuetracker.issue.IssueRespDTO;
import issuetracker.user_story.UserStoryRespDTO;
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
	
	@RequestMapping(value = "/{id}/stories", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getSprintStories(@PathVariable("id") long id) {
		List<UserStoryRespDTO> res = sprintDAO.getSprintsStories(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createSprint(@RequestBody SprintDTO sprintDTO) {
		SprintRespDTO res = sprintDAO.create(sprintDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/{id}/startSprint", method = RequestMethod.PATCH, produces = "application/json")
	public ResponseEntity<?> startSprint(@PathVariable("id") long id) {
		SprintRespDTO res = sprintDAO.startSprint(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/{id}/completeSprint", method = RequestMethod.PATCH, produces = "application/json")
	public ResponseEntity<?> completeSprint(@PathVariable("id") long id) {
		SprintRespDTO res = sprintDAO.completeSprint(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
