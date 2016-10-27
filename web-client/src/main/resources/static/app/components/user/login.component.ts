import {Component} from '@angular/core';
import { Router } from '@angular/router';

import { 
	  FormBuilder,
	  FormGroup,
	  Validators
	} from '@angular/forms';

import {User,UserService} from '../../services/user/user.service';

@Component({
	selector:'login-form',
	templateUrl:'app/components/user/login.html'
})
export default class LoginComponent{
	
	private loginForm:FormGroup;

	private loginMessage:string = null;
	
	constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router){
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
	    	password: ['', Validators.required]
		  });
	}
	
	login(){
		let user = new User(0,
				this.loginForm.value.username,
				this.loginForm.value.password,
				false);
		this.userService.authenticateUser(user)
				.subscribe(
				user => {this.userService.setUser(new User(null,user.name,null,user.authenticated));this.router.navigate(['/account']); console.log(this.userService.getUser());},
				error => {console.error(error); this.loginMessage = error;}
				);
		
	}
}