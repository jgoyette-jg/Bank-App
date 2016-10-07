import {Component} from '@angular/core';
import {Account,AccountService} from '../../services/account/account.service'; 

@Component({
	selector:'accounts-main',
	templateUrl: 'app/components/account/account.html'
})
export default class AccountComponent{
	
	accounts: Account[];
	
	constructor(private accountService:AccountService){
		this.accounts = accountService.getAccounts();
	}
	
}