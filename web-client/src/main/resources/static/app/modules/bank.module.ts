import {NgModule} 		from '@angular/core';
import {BrowserModule} 	from '@angular/platform-browser';
import {RouterModule}	from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import ApplicationComponent from '../components/application/application.component';
import HomeComponent from '../components/home/home.component';
import NavComponent from '../components/nav/nav.component';
import AccountComponent from '../components/account/account.component';
import AccountDetailComponent from '../components/account/detail/account.detail.component';

@NgModule({
	imports: [ BrowserModule, RouterModule.forRoot(
			[
			 {path:'', component: HomeComponent},
			 {path:'account', component: AccountComponent},
			 {path:'account/:id', component: AccountDetailComponent}
			 ]) ],
	declarations: [ ApplicationComponent,HomeComponent, NavComponent, AccountComponent, AccountDetailComponent ],
	bootstrap: [ ApplicationComponent ]
})
export class BankModule{}