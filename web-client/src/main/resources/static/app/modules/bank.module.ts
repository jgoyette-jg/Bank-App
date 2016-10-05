import {NgModule} 		from '@angular/core';
import {BrowserModule} 	from '@angular/platform-browser';
import {RouterModule}	from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import ApplicationComponent from '../components/application/application.component';
import HomeComponent from '../components/home/home.component';

@NgModule({
	imports: [ BrowserModule, RouterModule.forRoot([{path:'', component: HomeComponent}]) ],
	declarations: [ ApplicationComponent,HomeComponent ],
	bootstrap: [ ApplicationComponent ]
})
export class BankModule{}