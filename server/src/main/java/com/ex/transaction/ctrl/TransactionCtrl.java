package com.ex.transaction.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.transaction.domain.TransactionTO;
import com.ex.transaction.service.TransactionService;

@RestController()
@RequestMapping("transaction")
public class TransactionCtrl {
	
	@Autowired
	private TransactionService transactionServiceImpl;
	
	@PostMapping("add")
	public ResponseEntity<TransactionTO> createTransactionForAccount(@RequestBody TransactionTO transaction){
		return new ResponseEntity<TransactionTO>(transactionServiceImpl.addTransaction(transaction),HttpStatus.CREATED);
	}
	
	@GetMapping("all/{accountId}")
	public ResponseEntity<List<TransactionTO>> findAllTransactionsForAccount(@PathVariable("accountId") Long accountId){
		return new ResponseEntity<List<TransactionTO>>(transactionServiceImpl.findTransactionsByAcctId(accountId),HttpStatus.OK);
	}

}
