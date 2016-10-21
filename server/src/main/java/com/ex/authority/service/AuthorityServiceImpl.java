package com.ex.authority.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.authority.domain.Authority;
import com.ex.authority.repo.AuthorityRepo;

@Service
@Transactional
public class AuthorityServiceImpl implements AuthorityService{
	
	@Autowired
	private AuthorityRepo authorityRepo;

	@Override
	public void addAuthorityToUser(Authority authority) {
		authorityRepo.save(authority);
	}

}
