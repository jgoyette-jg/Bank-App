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
        this.users = [
            new User(1, 'TOM', '1234', false),
            new User(2, 'SAM', '1234', false)
        ];
        this.user = null;
    }
    UserService.prototype.isUserAuthenticated = function () {
        if (this.user != null)
            return this.user.authenticated;
        else
            return false;
    };
    UserService.prototype.authenticateUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == user.username && this.users[i].password == user.password) {
                this.user = this.users[i];
                this.user.authenticated = true;
                return this.user.authenticated;
            }
        }
        return false;
    };
    UserService.prototype.registerUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == user.username) {
                // User not registered as they already exist
                return false;
            }
        }
        user.id = this.users.length;
        this.users.push(user);
        return true;
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