package com.ex.user.ctrl;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.user.domain.User;
import com.ex.user.repo.UserRepo;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserCtrl {
	
	@Autowired
	private UserRepo userRepo;

	@GetMapping
	public ResponseEntity<Principal> getUser(Principal user){
		return new ResponseEntity<Principal>(user, HttpStatus.OK);
	}
	
	@PostMapping("register")
	public ResponseEntity<User> registerUser(User user){
		userRepo.save(user);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}
	
}
