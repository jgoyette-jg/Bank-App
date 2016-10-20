package com.ex.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.user.domain.User;
import com.ex.user.repo.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public void createUser(User user) {
		userRepo.save(user);
	}

	@Override
	public List<User> retrieveAllUsers() {
		return userRepo.findAll();
	}
	
}
