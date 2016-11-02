package com.ex.transfer.domain;

import java.math.BigDecimal;

public class TransferTO {

	private Long fromAccountId;
	private Long toAccountId;
	private BigDecimal amount;
	private String description;

	@Override
	public String toString() {
		return "TransferTO [fromAccountId=" + fromAccountId + ", toAccountId=" + toAccountId + ", amount=" + amount
				+ ", description=" + description + "]";
	}

	public Long getFromAccountId() {
		return fromAccountId;
	}

	public void setFromAccountId(Long fromAccountId) {
		this.fromAccountId = fromAccountId;
	}

	public Long getToAccountId() {
		return toAccountId;
	}

	public void setToAccountId(Long toAccountId) {
		this.toAccountId = toAccountId;
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

}
