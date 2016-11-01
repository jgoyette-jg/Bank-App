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
var TransactionService = (function () {
    function TransactionService(http) {
        this.http = http;
        this.transactions = null;
    }
    TransactionService.prototype.getTransactionsForAccountId = function (accountId) {
        return this.http.get("http://localhost:8086/transaction/all/" + accountId, { withCredentials: true }).map(function (response) { return response.json(); });
    };
    TransactionService.prototype.addTransaction = function (transaction) {
        return this.http.post('http://localhost:8086/transaction/add', transaction, { withCredentials: true }).map(function (response) { return response.json(); });
    };
    TransactionService.prototype.transferFunds = function (transfer) {
        this.transactions.push(new Transaction(this.transactions.length, transfer.fromAccountId, transfer.amount, transfer.description, 'D'));
        this.transactions.push(new Transaction(this.transactions.length, transfer.toAccountId, transfer.amount, transfer.description, 'C'));
    };
    TransactionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
var Transaction = (function () {
    function Transaction(transactionId, accountId, amount, description, creditDebit) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.amount = amount;
        this.description = description;
        this.creditDebit = creditDebit;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
var Transfer = (function () {
    function Transfer(fromAccountId, toAccountId, amount, description) {
        this.fromAccountId = fromAccountId;
        this.toAccountId = toAccountId;
        this.amount = amount;
        this.description = description;
    }
    return Transfer;
}());
exports.Transfer = Transfer;
//# sourceMappingURL=transaction.service.js.map