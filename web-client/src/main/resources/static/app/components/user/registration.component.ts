import {Component} from '@angular/core';
import { Router } from '@angular/router';

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
	
	constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router){
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
		
		this.userService.registerUser(user)
						.subscribe(
								user => {this.router.navigate(['/']);},
								error => {console.error(error); this.registrationMessage = error;}
						);
		
	}
}