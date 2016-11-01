package com.ex.transaction.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.transaction.domain.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction, Long>{
	
	public List<Transaction> findTransactionsByAccount_Id(Long id);

}
