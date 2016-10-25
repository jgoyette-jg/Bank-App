package com.ex.account.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.account.domain.Account;

public interface AccountRepo extends JpaRepository<Account, Long>{
	
	public List<Account> findAccountsByUser_Username(String username);

}
