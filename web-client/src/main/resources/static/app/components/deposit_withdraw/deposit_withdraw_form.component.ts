import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account }    from '../../services/account/account.service';
import { Transaction }    from '../../services/transaction/transaction.service';


@Component({
  moduleId: module.id,
  selector: 'deposit_withdraw_form-component',
  template: `<form>
	  			<div class="form-group">
	  				<label for="my_accounts">Accounts:</label>
	  				<select type="select" class="form-control" id="my_accounts">
	  					<option *ngFor="let account of accounts">{{account.name}} - Balance:{{account.balance}}</option>
	  				</select>
	  			</div>
	  		</form>`
})
export default class DepositWithdrawFormComponent {

	@Input() accounts:Account[];
	
	
	
}
