import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService{

	transactions:Transaction[] = null;
	
	constructor(private http:Http){
		
	}
	
	getTransactionsForAccountId(accountId:number):Observable<Transaction[]>{
			return this.http.get(`http://localhost:8086/transaction/all/${accountId}`,{ withCredentials: true }).map(response => response.json());
	}
	
	addTransaction(transaction:Transaction):Observable<Transaction>{
		return this.http.post('http://localhost:8086/transaction/add',transaction,{withCredentials: true}).map(response=>response.json());
	}
	
	transferFunds(transfer:Transfer){
		
		this.transactions.push(new Transaction(
							this.transactions.length,
							transfer.fromAccountId,
							transfer.amount,
							transfer.description,
							'D'
		));
		
		this.transactions.push(new Transaction(
							this.transactions.length,
							transfer.toAccountId,
							transfer.amount,
							transfer.description,
							'C'
		));
		
	}
	
}

export class Transaction{
	constructor(
		public transactionId:number,
		public accountId:number,
		public amount:number,
		public description:string,
		public creditDebit:string
	){}
}

export class Transfer{
	constructor(
		public fromAccountId:number,
		public toAccountId:number,
		public amount:number,
		public description:string
	){}
}