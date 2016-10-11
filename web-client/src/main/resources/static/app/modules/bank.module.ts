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

import {AccountService} from '../services/account/account.service'; 
import {TransactionService} from '../services/transaction/transaction.service'; 


@NgModule({
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ,
	           RouterModule.forRoot([
					 {path:'', component: HomeComponent},
					 {path:'account', component: AccountComponent},
					 {path:'account/:accountId', component: AccountDetailComponent},
					 {path:'dep_with', component: TransactionComponent}
					 ]) 
			 ],
	declarations: [ ApplicationComponent, 
	                HomeComponent, 
	                NavComponent, 
	                AccountComponent, 
	                AccountDetailComponent,
	                TransactionComponent,
	                DepositWithdrawFormComponent],
	providers:	[AccountService, TransactionService],
	bootstrap: [ ApplicationComponent ]
})
export class BankModule{}