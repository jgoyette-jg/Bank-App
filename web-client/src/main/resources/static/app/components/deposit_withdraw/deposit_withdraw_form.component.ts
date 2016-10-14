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
	  				<select type="select" class="form-control" id="my_accounts" formControlName="accountId">
	  					<option *ngFor="let account of accounts" [value]="account.id">{{account.name}} - Balance:{{account.balance}}</option>
	  				</select>
	  			</div>
	  			<div class="form-group">
	  				<label for="amount">Amount:</label>
	  				<input type="number" class="form-control" id="amount" formControlName="amount">
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
		
	private transaction:Transaction;
	
	private transactionForm:FormGroup;
	
	constructor(private formBuilder:FormBuilder){
	  this.transactionForm = this.formBuilder.group({
		accountId: [0, Validators.required],
    	amount: [0, Validators.required]
	  });
	}
	
	deposit(){
		this.transaction = new Transaction(
							0,
							parseInt(this.transactionForm.value.accountId),
							parseFloat(this.transactionForm.value.amount),
							'Deposit',
							'C'
		);
		this.transactionMade.emit(this.transaction);
	}
	
	withdraw(){
		this.transaction = new Transaction(
							0,
							parseInt(this.transactionForm.value.accountId),
							parseFloat(this.transactionForm.value.amount),
							'Withdrawal',
							'D'
		);
		this.transactionMade.emit(this.transaction);
	}
	
}
