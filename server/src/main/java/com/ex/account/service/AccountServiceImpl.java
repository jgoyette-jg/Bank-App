package com.ex.account.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.account.domain.Account;
import com.ex.account.domain.AccountTO;
import com.ex.account.repo.AccountRepo;
import com.ex.user.repo.UserRepo;

@Service
@Transactional
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private AccountRepo accountRepo;

	@Override
	public List<AccountTO> findAccountsByUsername(String username) {
		
		List<Account> accounts = accountRepo.findAccountsByUser_Username(username);
		List<AccountTO> accountTOs = new ArrayList<>();
		
		for(Account a : accounts){
			accountTOs.add(new AccountTO(a));
		}
		
		return accountTOs;
	}

	@Override
	public AccountTO createAccount(AccountTO accountTO) {
		Account account = new Account(accountTO, userRepo.findUserByUsername(accountTO.getUsername()));
		accountRepo.save(account);
		accountTO.setId(account.getId());
		return accountTO;
	}

}
