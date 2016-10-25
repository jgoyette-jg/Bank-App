"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.isUserAuthenticated = function () {
        if (this.user != null)
            return this.user.authenticated;
        else
            return false;
    };
    UserService.prototype.authenticateUser = function (user) {
        return this.call('http://localhost:8086/user', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.post('http://localhost:8086/user/register', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.call = function (url, data) {
        var username = data.username;
        var password = data.password;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(url, { headers: headers });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
var User = (function () {
    function User(id, username, password, authenticated) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authenticated = authenticated;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.service.js.map