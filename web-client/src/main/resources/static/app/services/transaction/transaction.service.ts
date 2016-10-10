import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService{

	transactions:Transaction[] = [new Transaction(1,33.25,'Food','D'),new Transaction(2,10.33,'Gas','D'),new Transaction(3,22.10,'Water','D'),new Transaction(4,22.10,'Deposit','C')];
	
	constructor(private http:Http){
		
	}
	
	getTransactions():Transaction[]{
		return this.transactions;
	}
	
}

export class Transaction{
	constructor(
		public transactionId:number,
		public amount:number,
		public description:string,
		public creditDebit:string
	){}
}