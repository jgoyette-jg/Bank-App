package com.ex.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.user.domain.User;

public interface UserRepo extends JpaRepository<User, String>{
	
	public User findUserByUsername(String username);

}
