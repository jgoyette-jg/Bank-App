import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService{
	
	constructor(private http:Http){}
	
	accounts: Account[] = [new Account(1,"Checking",250.00), new Account(2,"Savings",35.60)];
	
	getAccounts():Account[]{
		return this.accounts;
	}
	
	getAccountById(id:number):Account{
		
		for(var i; i < accounts.length; i++){
			if(accounts[i].id == id){
				return accounts[i];
			}
		}
		
	}
	
}


export class Account{
	
	constructor(
			public id:number,
			public name:string,
			public balance:number
	){}
	
}