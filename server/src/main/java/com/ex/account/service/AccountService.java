package com.ex.account.service;

import java.util.List;

import com.ex.account.domain.Account;

public interface AccountService {

	public List<Account> findAccountsByUsername(String username);
	public Account createAccount(Account account);
	
}
