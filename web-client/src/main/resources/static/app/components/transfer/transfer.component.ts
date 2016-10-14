import {Component} from '@angular/core';

import {Account, AccountService} from '../../services/account/account.service';
import {Transaction, Transfer, TransactionService} from '../../services/transaction/transaction.service';


@Component({
	selector: 'make-a-transaction',
	template: `<transfer-form-component [accounts]="accounts" (transferMade)="transferMade($event)"></transfer-form-component>`
})
export default class TransferComponent{
	
	accounts:Account[] = [];
	
	constructor(private accountService: AccountService, private transactionService: TransactionService){
		this.accounts = this.accountService.getAccounts();
	}
	
	transferMade(transfer:Transfer){
		console.log(transfer);
		this.accountService.updateAccount(new Transaction(0,transfer.fromAccountId,transfer.amount,transfer.description,'D'));
		this.accountService.updateAccount(new Transaction(0,transfer.toAccountId,transfer.amount,transfer.description,'C'));
		this.transactionService.transferFunds(transfer);
	}
	
}