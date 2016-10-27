import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

	private user:User;
	
	constructor(private http:Http){}
	
	isUserAuthenticated():boolean{
		if(this.user != null)
			return this.user.authenticated;
		else
			return false;
	}
	
	authenticateUser(user:User):Observable<any>{
		return this.call('http://localhost:8086/user',user).map(response => response.json());
	}
	
	registerUser(user:User):Observable<User>{
		return this.http.post('http://localhost:8086/user/register',user).map(response => response.json());
	}
	
	getUser():User{
		return this.user;
	}
	
	setUser(user:User){
		this.user = user;
	}
	
	call(url,data){
		let username: string = data.username;
		let password: string = data.password;
	    let headers = new Headers();
	    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
	    headers.append("Content-Type", "application/x-www-form-urlencoded");
	    return this.http.get(url, {headers: headers});
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