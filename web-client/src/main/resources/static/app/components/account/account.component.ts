import {Component} from '@angular/core';
import {Account,AccountService} from '../../services/account/account.service';
import {User,UserService} from '../../services/user/user.service';

@Component({
	selector:'accounts-main',
	templateUrl: 'app/components/account/account.html'
})
export default class AccountComponent{
	
	accounts: Account[] = null;
	
	constructor(private accountService:AccountService, private userService:UserService){
		this.accountService.getAccountsByUsername(userService.getUser().username).subscribe(
				accounts => {this.accounts = accounts; console.log(accounts);},
				error => {console.log(error);}
		);
	}
	
}