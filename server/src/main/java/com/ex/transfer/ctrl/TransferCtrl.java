package com.ex.transfer.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ex.transaction.service.TransactionService;
import com.ex.transfer.domain.TransferTO;

@RestController
@RequestMapping("transfer")
public class TransferCtrl {

	@Autowired
	private TransactionService	transactionServiceImpl;
	
	@PostMapping("one")
	public ResponseEntity<TransferTO> transferFundsBetweenAccounts(@RequestBody TransferTO transfer){
		System.out.println(transfer);
		return new ResponseEntity<TransferTO>(transactionServiceImpl.addTransfer(transfer),HttpStatus.CREATED);
	}
	
}
