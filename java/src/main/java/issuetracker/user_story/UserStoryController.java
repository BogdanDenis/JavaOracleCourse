package issuetracker.user_story;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/userstory")
public class UserStoryController {
	@Autowired
	UserStoryDAO userStoryDAO;
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getAllStories() {
		List<UserStoryRespDTO> res = userStoryDAO.findAll();
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{key}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<?> getStoryByKey(@PathVariable("key") String key) {
		UserStoryRespDTO res = userStoryDAO.findByKey(key);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> createUserStory(@RequestBody UserStoryDTO userStoryDTO) {
		UserStoryRespDTO res = userStoryDAO.create(userStoryDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeName", method = RequestMethod.PATCH,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> changeName(@RequestBody UserStoryNameDTO userStoryNameDTO) {
		UserStoryRespDTO res = userStoryDAO.changeName(userStoryNameDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/changeDescription", method = RequestMethod.PATCH,
			consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> changeDescription(@RequestBody UserStoryDescriptionDTO userStoryDescriptionDTO) {
		UserStoryRespDTO res = userStoryDAO.changeDescription(userStoryDescriptionDTO);
		if (res != null) {
			return new ResponseEntity<>(res, HttpStatus.OK);
		}
		return new ResponseEntity<>("", HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
