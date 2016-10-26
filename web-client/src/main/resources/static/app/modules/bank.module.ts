import {NgModule} 		from '@angular/core';
import {BrowserModule} 	from '@angular/platform-browser';
import {RouterModule}	from '@angular/router';
import {HttpModule}		from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import ApplicationComponent from '../components/application/application.component';
import HomeComponent from '../components/home/home.component';
import NavComponent from '../components/nav/nav.component';
import AccountComponent from '../components/account/account.component';
import AccountDetailComponent from '../components/account/detail/account.detail.component';
import TransactionComponent from '../components/transaction/transaction.component';
import DepositWithdrawFormComponent from '../components/deposit_withdraw/deposit_withdraw_form.component';
import TransferComponent from '../components/transfer/transfer.component';
import TransferFormComponent from '../components/transfer/transfer_form/transfer.form.component';
import LoginComponent from '../components/user/login.component';
import RegistrationComponent from '../components/user/registration.component';
import AccountCreationForm from '../components/account/create/account.creation.form';

import {AccountService} from '../services/account/account.service'; 
import {TransactionService} from '../services/transaction/transaction.service';
import {UserService} from '../services/user/user.service'; 


@NgModule({
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ,
	           RouterModule.forRoot([
					 {path:'', component: HomeComponent},
					 {path:'account', component: AccountComponent},
					 {path:'account/:accountId', component: AccountDetailComponent},
					 {path:'dep_with', component: TransactionComponent},
					 {path:'transfer', component: TransferComponent},
					 {path:'register', component: RegistrationComponent}
					 ]) 
			 ],
	declarations: [ ApplicationComponent, 
	                HomeComponent, 
	                NavComponent, 
	                AccountComponent, 
	                AccountDetailComponent,
	                TransactionComponent,
	                DepositWithdrawFormComponent,
	                TransferComponent,
	                TransferFormComponent,
	                LoginComponent,
	                RegistrationComponent,
	                AccountCreationForm],
	providers:	[AccountService, TransactionService, UserService],
	bootstrap: [ ApplicationComponent ]
})
export class BankModule{}