package com.ex.transaction.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.account.domain.Account;
import com.ex.account.repo.AccountRepo;
import com.ex.transaction.domain.Transaction;
import com.ex.transaction.domain.TransactionTO;
import com.ex.transaction.repo.TransactionRepo;

@Service
@Transactional
public class TransactionServiceImpl implements TransactionService{
	
	@Autowired
	private TransactionRepo transactionRepo;
	
	@Autowired
	private AccountRepo accountRepo;

	@Override
	public List<TransactionTO> findTransactionsByAcctId(Long id) {
		
		List<TransactionTO> transactionTOs = new ArrayList<>();
		List<Transaction> transactions = transactionRepo.findTransactionsByAccount_Id(id);
		
		for(Transaction t: transactions){
			transactionTOs.add(new TransactionTO(t));
		}
		
		return transactionTOs;
	}

	@Override
	public TransactionTO addTransaction(TransactionTO transactionTO) {		
		Transaction savedTransaction = new Transaction(transactionTO);
		Account account = accountRepo.findOne(transactionTO.getAccountId());
		
		if(transactionTO.getCreditDebit().equals("C")){
			account.setBalance(account.getBalance().add(transactionTO.getAmount()));
		}else if(transactionTO.getCreditDebit().equals("D")){
			account.setBalance(account.getBalance().subtract(transactionTO.getAmount()));
		}
		
		accountRepo.save(account);
		
		savedTransaction.setAccount(account);
		
		return new TransactionTO(transactionRepo.save(savedTransaction));
	}

}
