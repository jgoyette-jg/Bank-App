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
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.accounts = [new Account(1, "Checking", 250.00), new Account(2, "Savings", 35.60)];
    }
    AccountService.prototype.getAccounts = function () {
        return this.accounts;
    };
    AccountService.prototype.getAccountById = function (id) {
        for (var i; i < accounts.length; i++) {
            if (accounts[i].id == id) {
                return accounts[i];
            }
        }
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
var Account = (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.service.js.map