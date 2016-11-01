package com.ex.transaction.domain;

import java.math.BigDecimal;

public class TransactionTO {

	private Long transactionId;
	private Long accountId;
	private String description;
	private BigDecimal amount;
	private String creditDebit;

	public TransactionTO(Transaction t) {
		super();
		this.transactionId = t.getId();
		this.accountId = t.getAccount().getId();
		this.description = t.getDescription();
		this.amount = t.getAmount();
		this.creditDebit = t.getCreditDebit();
	}

	public TransactionTO() {
		super();
	}

	@Override
	public String toString() {
		return "TransactionTO [transactionId=" + transactionId + ", accountId=" + accountId + ", description="
				+ description + ", amount=" + amount + ", creditDebit=" + creditDebit + "]";
	}

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getCreditDebit() {
		return creditDebit;
	}

	public void setCreditDebit(String creditDebit) {
		this.creditDebit = creditDebit;
	}

}
