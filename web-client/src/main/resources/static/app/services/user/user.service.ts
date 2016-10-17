import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
	
	users:User[] = [
	                     new User(1,'TOM','1234',false),
	                     new User(2,'SAM','1234',false)
	];

	user:User = null;
	
	constructor(private http:Http){}
	
	isUserAuthenticated():boolean{
		if(this.user != null)
			return this.user.authenticated;
		else
			return false;
	}
	
	authenticateUser(user:User):boolean{
		
		for(var i = 0; i<this.users.length; i++){
			if(this.users[i].username == user.username && this.users[i].password == user.password){
				this.user = this.users[i];
				this.user.authenticated = true;
				return this.user.authenticated;
			}
		}
		
		return false;
	}
	
	registerUser(user:User):boolean{
		
		for(var i = 0; i<this.users.length; i++){
			if(this.users[i].username == user.username){
				// User not registered as they already exist
				return false;
			}
		}
		
		user.id = this.users.length;
		this.users.push(user);
		
		return true;
	}
	
}

export class User{
	
	constructor(
			public id:number,
			public username:string,
			public password:string,
			public authenticated:boolean
	){}
	
}