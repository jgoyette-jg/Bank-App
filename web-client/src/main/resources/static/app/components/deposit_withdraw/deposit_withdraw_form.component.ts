import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account }    from '../../services/account/account.service';
import { Transaction }    from '../../services/transaction/transaction.service';
import { 
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'deposit_withdraw_form-component',
  template: `<form [formGroup]="transactionForm">
	  			<div class="form-group">
	  				<label for="my_accounts">Accounts:</label>
	  				<select type="select" class="form-control" id="my_accounts" (change)=select($event.target.value)>
	  					<option *ngFor="let account of accounts" [value]="account">{{account.name}} - Balance:{{account.balance}}</option>
	  				</select>
	  			</div>
	  			<div class="form-group">
	  				<label for="amount">Amount:</label>
	  				<input type="text" class="form-control" id="amount" formControlName="amount">
	  				<p class="help-text" *ngIf="transactionForm.controls.amount.errors">Please enter an amount less than your balance!</p>
	  			</div>
	  			<div class="form-group">
					<button class="btn btn-success" (click)="deposit()">Deposit</button>
					<button class="btn btn-danger" (click)="withdraw()">Withdraw</button>
	  			</div>
	  		</form>`
})
export default class DepositWithdrawFormComponent {

	@Input() accounts:Account[];
	@Output() transactionMade = new EventEmitter<Transaction>();
	
	private account:Account = new Account(0,null,0,null);
	
	private transaction:Transaction = new Transaction(0,0,0,null,null);
	
	constructor(){
	  this.transactionForm = this.formBuilder.group({
    	amount: [0, Validators.required]
	  });
	}
	
	select(account:Account){
		this.account = account;
		console.log(account);
	}
	
	deposit(){

	}
	
}
