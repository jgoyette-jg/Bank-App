import {Component} from '@angular/core';

import {User,UserService} from '../../services/user/user.service';

@Component({
	selector: 'bank-nav',
	templateUrl: 'app/components/nav/nav.html'
})
export default class NavComponent{
	
	constructor(private userService:UserService){
	}
	
	
	isLoggedIn(){
		return this.userService.isUserAuthenticated();
	}
	
}