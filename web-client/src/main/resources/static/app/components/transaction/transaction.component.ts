import {Component} from '@angular/core';

import {Account, AccountService} from '../../services/account/account.service';
import {Transaction, TransactionService} from '../../services/transaction/transaction.service';
import DepositWithdrawFormComponent from '../deposit_withdraw/deposit_withdraw_form.component';


@Component({
	selector: 'make-a-transaction',
	template: `<deposit_withdraw_form-component [accounts]="accounts" (transactionMade)="transactionMade($event)"></deposit_withdraw_form-component>`
})
export default class TransactionComponent{
	
	accounts:Account[] = [];

	transactionMessage:string = null;
	
	constructor(private accountService: AccountService, private transactionService: TransactionService){
		this.accounts = this.accountService.getAccounts();
	}
	
	transactionMade(transaction:Transaction){
		this.transactionMessage = "Posting...";
		this.transactionService.addTransaction(transaction).subscribe(
			success => {this.transactionMessage = "Successful posting of: " + transaction.amount; this.accountService.updateAccount(transaction);},
			error => {console.log(error); this.transactionMessage = error; }
		);
	}
	
}