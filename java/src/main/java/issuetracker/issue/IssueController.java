package issuetracker.issue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/issue/")
public class IssueController {
	@Autowired
	IssueDAO issueDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public List<IssueDTO> getAllIssues() {
		return issueDAO.findAll();
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = "application/json")
	public IssueDTO getIssue(@PathVariable("id") String id) {
		return issueDAO.findById(id);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public void createIssue(@RequestBody IssueDTO issueDto) {
		issueDAO.create(issueDto);
	}
	
	@RequestMapping(value = "changeType", method = RequestMethod.PATCH, consumes = "application/json")
	public void changeType(@RequestBody IssueTypeDTO issueTypeDTO) {
		issueDAO.changeType(issueTypeDTO);
	}
	
	@RequestMapping(value = "changeName", method = RequestMethod.PATCH, consumes = "application/json")
	public void changeName(@RequestBody IssueNameDTO issueNameDTO) {
		issueDAO.changeName(issueNameDTO);
	}
	
	@RequestMapping(value = "changeDescription", method = RequestMethod.PATCH, consumes = "application/json")
	public void changeDescription(@RequestBody IssueDescriptionDTO issueDescriptionDTO) {
		issueDAO.changeDescription(issueDescriptionDTO);
	}
	
	@RequestMapping(value = "changeAssignee", method = RequestMethod.PATCH, consumes = "application/json")
	public void changeAssignee(@RequestBody IssueAssigneeDTO issueAssigneeDTO) {
		issueDAO.changeAssignee(issueAssigneeDTO);
	}
	
	@RequestMapping(value = "changeStatus", method = RequestMethod.PATCH, consumes = "application/json")
	public void changeStatus(@RequestBody IssueStatusDTO issueStatusDTO) {
		issueDAO.changeStatus(issueStatusDTO);
	}
}
