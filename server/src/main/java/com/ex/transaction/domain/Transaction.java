package com.ex.transaction.domain;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.ex.account.domain.Account;

@Entity
@Table(name="acct_transaction")
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private BigDecimal amount;
	private String description;
	private String creditDebit;
	@ManyToOne
	@JoinColumn(name = "account_id", referencedColumnName = "account_id")
	private Account account;

	public Transaction(TransactionTO t) {
		super();
		this.amount = t.getAmount();
		this.description = t.getDescription();
		this.creditDebit = t.getCreditDebit();
	}

	public Transaction() {
		super();
	}

	@Override
	public String toString() {
		return "Transaction [id=" + id + ", amount=" + amount + ", description=" + description + ", creditDebit="
				+ creditDebit + ", account=" + account + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreditDebit() {
		return creditDebit;
	}

	public void setCreditDebit(String creditDebit) {
		this.creditDebit = creditDebit;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

}
