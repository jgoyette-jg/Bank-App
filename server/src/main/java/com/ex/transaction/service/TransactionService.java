package com.ex.transaction.service;

import java.util.List;

import com.ex.transaction.domain.TransactionTO;

public interface TransactionService {
	
	public List<TransactionTO> findTransactionsByAcctId(Long id);
	public TransactionTO addTransaction(TransactionTO transactionTO);

}
