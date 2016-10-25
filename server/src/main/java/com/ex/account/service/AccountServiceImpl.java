package com.ex.account.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.account.domain.Account;
import com.ex.account.repo.AccountRepo;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private AccountRepo accountRepo;

	@Override
	public List<Account> findAccountsByUsername(String username) {
		return accountRepo.findAccountsByUser_Username(username);
	}

	@Override
	public Account createAccount(Account account) {
		accountRepo.save(account);
		return account;
	}

}
