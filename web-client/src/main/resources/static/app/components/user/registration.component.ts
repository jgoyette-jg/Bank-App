import {Component} from '@angular/core';

import { 
	  FormBuilder,
	  FormGroup,
	  Validators
	} from '@angular/forms';

import {User,UserService} from '../../services/user/user.service';

@Component({
	selector:'registration-form',
	templateUrl:'app/components/user/register.html'
})
export default class RegistrationComponent{
	
	private registrationForm:FormGroup;

	private registrationMessage:string = null;
	
	constructor(private userService:UserService, private formBuilder:FormBuilder){
		this.registrationForm = this.formBuilder.group({
			username: ['', Validators.required],
	    	password: ['', Validators.required]
		  });
	}
	
	register(){
		
		let user = new User(0,
				this.registrationForm.value.username,
				this.registrationForm.value.password,
				false);
		
		let registrationSuccess = this.userService.authenticateUser(user);
		console.log('Getting hit...');
		console.log(user);
		if(registrationSuccess){
			console.log('User exists...');
			this.registrationMessage = 'User may already exist.';
		}else{
			console.log('Created user!!!');
		}
		
	}
}