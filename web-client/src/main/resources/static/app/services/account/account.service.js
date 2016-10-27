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
        this.accounts = null;
    }
    AccountService.prototype.getAccounts = function () {
        return this.accounts;
    };
    AccountService.prototype.setAccounts = function (accounts) {
        this.accounts = accounts;
    };
    AccountService.prototype.getAccountsByUsername = function (username) {
        return this.http.get("http://localhost:8086/account/all/" + username, { withCredentials: true }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.createAccount = function (account) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post('http://localhost:8086/account/add', account, options).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getAccountById = function (id) {
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].id == id) {
                return this.accounts[i];
            }
        }
    };
    AccountService.prototype.updateAccount = function (transaction) {
        var account = this.getAccountById(transaction.accountId);
        if (transaction.creditDebit == 'C') {
            account.balance += transaction.amount;
        }
        else if (transaction.creditDebit == 'D') {
            account.balance -= transaction.amount;
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
    function Account(id, name, balance, username, transactions) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.username = username;
        this.transactions = transactions;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.service.js.map