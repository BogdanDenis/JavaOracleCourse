package issuetracker.workload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/workload")
public class WorkloadController {
	@Autowired
	WorkloadDAO workloadDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllWorkloads() {
		List<WorkloadRespDTO> res = workloadDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createWorkload(@RequestBody WorkloadDTO workloadDTO) {
		WorkloadRespDTO res = workloadDAO.addDeveloperToAProject(workloadDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.CREATED);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/developer/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getDevelopersWorkload(@PathVariable("id") long developerId) {
		List<WorkloadRespDTO> res = workloadDAO.findProjectsWithDeveloper(developerId);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "/project/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getProjectsDevelopers(@PathVariable("id") long projectId) {
		List<WorkloadRespDTO> res = workloadDAO.findDevelopersOnAProject(projectId);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
}
