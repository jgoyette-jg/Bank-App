package com.ex.account.domain;

import java.math.BigDecimal;

public class AccountTO {

	private Long id;
	private String name;
	private BigDecimal balance;
	private String username;

	public AccountTO(Long id, String name, BigDecimal balance, String username) {
		super();
		this.id = id;
		this.name = name;
		this.balance = balance;
		this.username = username;
	}
	
	public AccountTO(Account account) {
		super();
		this.id = account.getId();
		this.name = account.getName();
		this.balance = account.getBalance();
		this.username = account.getUser().getUsername();
	}

	public AccountTO() {
		super();
	}

	@Override
	public String toString() {
		return "AccountTO [id=" + id + ", name=" + name + ", balance=" + balance + ", username=" + username + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
