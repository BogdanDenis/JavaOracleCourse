package issuetracker.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/project")
public class ProjectController {
	@Autowired
	ProjectDAO projectDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public List<ProjectRespDTO> getAllProjects() {
		return projectDAO.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
	public ProjectRespDTO getProject(@PathVariable("id") long id) {
		return projectDAO.findById(id);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST, 
			consumes = "application/json", produces = "application/json")
	public void createProject(@RequestBody ProjectDTO projectDTO) {
		projectDAO.create(projectDTO);
	}
}
