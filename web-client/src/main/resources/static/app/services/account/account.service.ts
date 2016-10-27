import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {Transaction} from '../transaction/transaction.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService{
	
	constructor(private http:Http){}
	
	private accounts: Account[] = null;
	
	getAccounts():Account[]{
		return this.accounts;
	}
	
	setAccounts(accounts:Account[]){
		this.accounts = accounts;
	}
	
	getAccountsByUsername(username:string):Observable<Account[]>{
		return this.http.get(`http://localhost:8086/account/all/${username}`,{ withCredentials: true }).map(response => response.json());
	}
	
	createAccount(account:Account):Observable<Account>{
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: headers, withCredentials: true });
		return this.http.post('http://localhost:8086/account/add',account,options).map(response=>response.json());
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
			public username:string,
			public transactions:Transaction[]
	){}
	
}