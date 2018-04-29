package issuetracker.issue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/issue")
public class IssueController {
	@Autowired
	IssueDAO issueDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllIssues() {
		List<IssueRespDTO> res = issueDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getIssue(@PathVariable("id") String id) {
		IssueRespDTO res = issueDAO.findById(id);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createIssue(@RequestBody IssueDTO issueDto) {
		boolean success = issueDAO.create(issueDto);
		if (success) {
			return new ResponseEntity<>("", HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeType", method = RequestMethod.PATCH, consumes = "application/json")
	public ResponseEntity<?> changeType(@RequestBody IssueTypeDTO issueTypeDTO) {
		boolean success = issueDAO.changeType(issueTypeDTO);
		if (success) {
			return new ResponseEntity<>(issueDAO.findById(issueTypeDTO.getId()), HttpStatus.OK);
		}
		return new ResponseEntity<>(issueDAO.findById(issueTypeDTO.getId()), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeName", method = RequestMethod.PATCH, consumes = "application/json")
	public ResponseEntity<?> changeName(@RequestBody IssueNameDTO issueNameDTO) {
		boolean success = issueDAO.changeName(issueNameDTO);
		if (success) {
			return new ResponseEntity<>(issueDAO.findById(issueNameDTO.getId()), HttpStatus.OK);
		}
		return new ResponseEntity<>(issueDAO.findById(issueNameDTO.getId()), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeDescription", method = RequestMethod.PATCH, consumes = "application/json")
	public ResponseEntity<?> changeDescription(@RequestBody IssueDescriptionDTO issueDescriptionDTO) {
		boolean success = issueDAO.changeDescription(issueDescriptionDTO);
		if (success) {
			return new ResponseEntity<>(issueDAO.findById(issueDescriptionDTO.getId()), HttpStatus.OK);
		}
		return new ResponseEntity<>(issueDAO.findById(issueDescriptionDTO.getId()), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeAssignee", method = RequestMethod.PATCH, consumes = "application/json")
	public ResponseEntity<?> changeAssignee(@RequestBody IssueAssigneeDTO issueAssigneeDTO) {
		boolean success = issueDAO.changeAssignee(issueAssigneeDTO);
		if (success) {
			return new ResponseEntity<>(issueDAO.findById(issueAssigneeDTO.getId()), HttpStatus.OK);
		}
		return new ResponseEntity<>(issueDAO.findById(issueAssigneeDTO.getId()), HttpStatus.INTERNAL_SERVER_ERROR);	}
	
	@RequestMapping(value = "/changeStatus", method = RequestMethod.PATCH, consumes = "application/json")
	public ResponseEntity<?> changeStatus(@RequestBody IssueStatusDTO issueStatusDTO) {
		boolean success = issueDAO.changeStatus(issueStatusDTO);
		if (success) {
			return new ResponseEntity<>(issueDAO.findById(issueStatusDTO.getId()), HttpStatus.OK);
		}
		return new ResponseEntity<>(issueDAO.findById(issueStatusDTO.getId()), HttpStatus.INTERNAL_SERVER_ERROR);	}
}
