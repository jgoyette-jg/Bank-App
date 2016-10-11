import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Transaction} from '../transaction/transaction.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService{
	
	constructor(private http:Http){}
	
	accounts: Account[] = [new Account(1,"Checking",250.00,[]), new Account(2,"Savings",35.60,[])];
	
	getAccounts():Account[]{
		return this.accounts;
	}
	
	getAccountById(id:number):Account{
		
		for(var i=0; i < this.accounts.length; i++){
			if(this.accounts[i].id == id){
				return this.accounts[i];
			}
		}
		
	}
	
	updateAccount(transaction:Transaction){
		let account = this.getAccountById(transaction.accountId);
		
		if(transaction.creditDebit=='C'){
			account.balance += transaction.amount;
		}else if(transaction.creditDebit=='D'){
			account.balance -= transaction.amount;
		}
	}
	
}


export class Account{
	
	constructor(
			public id:number,
			public name:string,
			public balance:number,
			public transactions:Transaction[]
	){}
	
}