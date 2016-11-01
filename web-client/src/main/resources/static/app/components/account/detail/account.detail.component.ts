import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Account,AccountService} from '../../../services/account/account.service';
import {Transaction, TransactionService} from '../../../services/transaction/transaction.service';

@Component({
	selector:'account-detail',
	templateUrl: 'app/components/account/detail/account-detail.html'
})
export default class AccountDetailComponent{
	
	account:Account;
	transactions:Transaction[] = null;

	constructor(private route: ActivatedRoute, private accountService: AccountService, private transactionService: TransactionService){
		const accountId = parseInt(route.snapshot.params['accountId']);
		
		this.account = accountService.getAccountById(accountId);
		
		this.transactionService.getTransactionsForAccountId(accountId)
						.subscribe(
								transactions => {this.transactions = transactions; console.log(transactions)},
								error => {console.log(error);}
						);
	}
	
}