package issuetracker.project;

import issuetracker.sprint.SprintRespDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/project")
public class ProjectController {
	@Autowired
	ProjectDAO projectDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllProjects() {
		List<ProjectRespDTO> res = projectDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "/{key}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getProject(@PathVariable("key") String key) {
		ProjectRespDTO res = projectDAO.findByKey(key);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST, 
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createProject(@RequestBody ProjectDTO projectDTO) {
		boolean success = projectDAO.create(projectDTO);
		if (success) {
			return new ResponseEntity<>("", HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/{key}/sprints", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getProjectsSprints(@PathVariable("key") String key) {
		List<SprintRespDTO> res = projectDAO.findSprints(key);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/{key}/activeSprint", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getProjectsActiveSprint(@PathVariable("key") String key) {
		SprintRespDTO res = projectDAO.findActiveSprint(key);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/{key}/backlog", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getProjectsBacklog(@PathVariable("key") String key) {
		SprintRespDTO res = projectDAO.findBacklog(key);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
