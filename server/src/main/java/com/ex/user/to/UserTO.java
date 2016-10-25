package com.ex.user.to;

import com.ex.user.domain.User;

public class UserTO {

	private String username;
	private String password;
	private boolean authenticated;
	
	

	public UserTO(User user) {
		super();
		this.username = user.getUsername();
		this.password = user.getPassword();
//		this.authenticated = user.get;
	}

	public UserTO() {
		super();
	}

	public UserTO(String username, String password, boolean authenticated) {
		super();
		this.username = username;
		this.password = password;
		this.authenticated = authenticated;
	}

	@Override
	public String toString() {
		return "UserTO [username=" + username + ", password=" + password + ", authenticated=" + authenticated + "]";
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

}
