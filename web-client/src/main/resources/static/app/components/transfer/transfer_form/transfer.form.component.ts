import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account }    from '../../../services/account/account.service';
import { Transfer }    from '../../../services/transaction/transaction.service';
import { 
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
	  moduleId: module.id,
	  selector: 'transfer-form-component',
	  template: `<form [formGroup]="transferForm" (submit)="transferFunds()">

	<div class="form-group">
		<label for="from_account">From:</label> 
		<select type="select" class="form-control" id="from_account" formControlName="fromAccountId">
			<option *ngFor="let account of accounts" [value]="account.id">{{account.name}}
				- Balance: {{account.balance}}</option>
		</select>
	</div>
	<div class="form-group">
		<label for="to_account">To:</label> 
		<select type="select" class="form-control" id="to_account" formControlName="toAccountId">
			<option *ngFor="let account of accounts"
		  			[value]="account.id">{{account.name}}
				- Balance: {{account.balance}}</option>
		</select>
	</div>
	<div class="form-group">
		<label for="amount">Amount:</label> <input type="number"
			class="form-control" id="amount" formControlName="amount">
		<p class="help-text" *ngIf="transferForm.controls.amount.errors">Please
			enter an amount less than your balance!</p>
	</div>
	<div>
		<input type="submit" class="btn btn-success" value="Transfer">
	</div>

</form>`})
export default class TransferFormComponent{
	
	@Input() accounts:Account[];
	@Output() transferMade = new EventEmitter<Transfer>();
	
	private transferForm:FormGroup;
	
	private transfer:Transfer;
	
	constructor(private formBuilder:FormBuilder){
	  this.transferForm = this.formBuilder.group({
		fromAccountId: [null, Validators.required],
		toAccountId: [null, Validators.required],
    	amount: [0, Validators.required]
	  });
	}
	
	transferFunds(){
		
		this.transfer = new Transfer(
				parseInt(this.transferForm.value.fromAccountId),
				parseInt(this.transferForm.value.toAccountId),
				parseFloat(this.transferForm.value.amount),
				'Transfer');
		console.log(this.transfer);
		this.transferMade.emit(this.transfer);
	}
}