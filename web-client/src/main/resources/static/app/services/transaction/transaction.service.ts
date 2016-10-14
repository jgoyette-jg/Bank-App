import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService{

	transactions:Transaction[] = [new Transaction(1,1,33.25,'Food','D'),new Transaction(2,1,10.33,'Gas','D'),new Transaction(3,1,22.10,'Water','D'),new Transaction(4,2,22.10,'Deposit','C')];
	
	constructor(private http:Http){
		
	}
	
	getTransactionsForAccountId(accountId:number):Transaction[]{
		let foundTransactions:Transaction[] = [];
		for(let i =0; i<this.transactions.length;i++){
			if(this.transactions[i].accountId==accountId){
				foundTransactions.push(this.transactions[i]);
			}
		}
		return foundTransactions;
	}
	
	addTransaction(transaction:Transaction){
		transaction.transactionId = this.transactions.length;
		this.transactions.push(transaction);
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