package com.ex.account.service;

import java.util.List;

import com.ex.account.domain.Account;
import com.ex.account.domain.AccountTO;

public interface AccountService {

	public List<AccountTO> findAccountsByUsername(String username);
	public AccountTO createAccount(AccountTO accountTO);
	
}
