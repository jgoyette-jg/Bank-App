import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account }    from '../../../services/account/account.service';
import { 
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'account-creation-form',
  template: `<form [formGroup]="accountForm" (submit)="createAccount()">
	  			<div class="form-group">
	  				<label for="accountName">Nickname:</label>
	  				<input type="text" class="form-control" formControlName="accountName">
	  			</div>
	  			<div class="form-group">
	  				<label for="balance">Balance:</label>
	  				<input type="number" class="form-control" id="balance" formControlName="balance">
	  			</div>
	  			<div class="form-group">
					<button class="btn btn-success" type="submit">Create</button>
	  			</div>
	  		</form>`
})
export default class AccountCreationForm {

	@Output() accountCreated = new EventEmitter<Account>();
	
	private account:Account;
		
	private accountForm:FormGroup;
	
	constructor(private formBuilder:FormBuilder){
	  this.accountForm = this.formBuilder.group({
		accountName: ["", Validators.required],
    	balance: [0, Validators.required]
	  });
	}
	
	createAccount(){
		
		this.account = new Account(0,
								this.accountForm.value.accountName,
								this.accountForm.value.balance,
								null,
								[]);
		this.accountCreated.emit(this.account);
	}
	
}
