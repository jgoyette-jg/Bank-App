import {Component} from '@angular/core';

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
	
	constructor(private userService:UserService, private formBuilder:FormBuilder){
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
		user.authenticated = this.userService.authenticateUser(user);
		console.log('Getting hit...');
		console.log(user);
		if(!user.authenticated){
			console.log('Not valid');
			this.loginMessage = 'Invalid credentials...';
		}else{
			console.log('Valid!');
		}
	}
}