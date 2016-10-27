package com.ex.user.service;

import java.util.List;

import com.ex.user.domain.User;

public interface UserService {
	
	public void createUser(User user);
	public User findUserByUsername(String username);
	public List<User> retrieveAllUsers();

}
