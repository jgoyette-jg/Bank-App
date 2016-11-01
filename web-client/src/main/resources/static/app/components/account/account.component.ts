import {Component} from '@angular/core';
import {Account,AccountService} from '../../services/account/account.service';
import {User,UserService} from '../../services/user/user.service';

@Component({
	selector:'accounts-main',
	templateUrl: 'app/components/account/account.html'
})
export default class AccountComponent{
	
	accounts: Account[] = null;

	private accountCreationMessage = null;
	
	constructor(private accountService:AccountService, private userService:UserService){
		this.populateAccounts();
	}
	
	createAccount(account:Account){
		account.username = this.userService.getUser().username;
		console.log(account);
		this.accountService.createAccount(account).subscribe(
				account => {this.accountCreationMessage = 'Successfully created ' +account.name+ '!'; this.populateAccounts();},
				error => {this.accountCreationMessage = error; console.log(error);}
		);
	}
	
	populateAccounts(){
		this.accountService.getAccountsByUsername(this.userService.getUser().username).subscribe(
				accounts => {this.accountService.setAccounts(accounts); this.accounts = this.accountService.getAccounts(); console.log(accounts);},
				error => {console.log(error);}
		);
	}
	
}