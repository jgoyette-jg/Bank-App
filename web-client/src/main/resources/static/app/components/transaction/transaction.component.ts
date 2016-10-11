import {Component} from '@angular/core';
////
import {Account, AccountService} from '../../services/account/account.service';
import {Transaction, TransactionService} from '../../services/transaction/transaction.service';
import DepositWithdrawFormComponent from '../deposit_withdraw/deposit_withdraw_form.component';


@Component({
	selector: 'make-a-transaction',
	template: `<deposit_withdraw_form-component [accounts]="accounts"></deposit_withdraw_form-component>`
})
export default class TransactionComponent{
	
	accounts:Account[] = [];
	
	constructor(private accountService: AccountService, private transactionService: TransactionService){
		this.accounts = this.accountService.getAccounts();
	}
	
	deposit(transaction:Transaction){
		transaction.creditDebit='C';
		this.accountService.updateAccount(transaction);
		this.transactionService.addTransaction(transaction);
	}
	
	withdraw(transaction:Transaction){
		transaction.creditDebit='D';
		this.accountService.updateAccount(transaction);
		this.transactionService.addTransaction(transaction);
	}
	
}