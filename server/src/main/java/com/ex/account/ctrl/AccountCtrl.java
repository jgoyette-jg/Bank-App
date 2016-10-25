package com.ex.account.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.account.domain.Account;
import com.ex.account.service.AccountService;

@RestController
@CrossOrigin
@RequestMapping("/account")
public class AccountCtrl {
	
	@Autowired
	private AccountService accountServiceImpl;
	
	@GetMapping("/all/{username}")
	public ResponseEntity<List<Account>> getAllAccounts(@PathVariable("username") String username){
		return new ResponseEntity<List<Account>>(accountServiceImpl.findAccountsByUsername(username),HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Account>  addAccount(@RequestBody Account account){
		return new ResponseEntity<Account>(account, HttpStatus.CREATED);
	}

}
