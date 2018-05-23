package issuetracker.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import issuetracker.developer.DeveloperDAO;
import issuetracker.developer.DeveloperDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    DeveloperDAO developerDAO;

    @RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> auth(@RequestBody AuthDTO user) {
        ResponseEntity<?> failRes = new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);

        if (user.getLogin() == null || user.getPassword() == null) {
            return failRes;
        }

        String login = user.getLogin();
        String password = user.getPassword();

        DeveloperDTO developer = developerDAO.findByEmailWithPassword(login);

        if (developer == null) {
            return failRes;
        }

        String pwd = developer.getPassword();

        if (!password.equals(pwd)) {
            return failRes;
        }

        String tokenStr = Jwts.builder()
                .setSubject(login)
                .signWith(SignatureAlgorithm.HS256, "secretKey")
                .compact();

        Token token = new Token(tokenStr, "Bearer");
        return new ResponseEntity<>(token, HttpStatus.OK);
    }
}
