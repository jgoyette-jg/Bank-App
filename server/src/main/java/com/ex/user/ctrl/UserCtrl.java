package com.ex.user.ctrl;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.authority.domain.Authority;
import com.ex.authority.service.AuthorityService;
import com.ex.user.domain.User;
import com.ex.user.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserCtrl {
	
	@Autowired
	private UserService userServiceImpl;
	
	@Autowired
	private AuthorityService authorityServiceImpl;

	@GetMapping
	public ResponseEntity<Principal> getUser(Principal user){
		return new ResponseEntity<Principal>(user, HttpStatus.OK);
	}
	
	@PostMapping("register")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		System.out.println(user);
		userServiceImpl.createUser(user);
		Authority auth = new Authority();
		auth.setAuthority("USER");
		auth.setUser(user);
		authorityServiceImpl.addAuthorityToUser(auth);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}
	
	@GetMapping("all")
	public ResponseEntity<List<User>> getAllUsers(){
		return new ResponseEntity<List<User>>(userServiceImpl.retrieveAllUsers(),HttpStatus.FOUND);
	}
	
}
