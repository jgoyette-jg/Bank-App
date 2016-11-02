import {Component} from '@angular/core';

import {Account, AccountService} from '../../services/account/account.service';
import {Transaction, Transfer, TransactionService} from '../../services/transaction/transaction.service';


@Component({
	selector: 'make-a-transaction',
	template: `<transfer-form-component [accounts]="accounts" (transferMade)="transferMade($event)"></transfer-form-component>`
})
export default class TransferComponent{
	
	accounts:Account[] = [];

	transferMessage:string = null;
	
	constructor(private accountService: AccountService, private transactionService: TransactionService){
		this.accounts = this.accountService.getAccounts();
	}
	
	transferMade(transfer:Transfer){
		this.transactionService.transferFunds(transfer).subscribe(
				success => {this.transferMessage = "Successful transfer!"; console.log(success)} ,
				error 	=> {this.transferMessage = "Failed transfer!"; console.log(error);}
		);
	}
	
}