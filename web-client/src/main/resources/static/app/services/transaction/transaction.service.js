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
        this.transactions = [new Transaction(1, 1, 33.25, 'Food', 'D'), new Transaction(2, 1, 10.33, 'Gas', 'D'), new Transaction(3, 1, 22.10, 'Water', 'D'), new Transaction(4, 2, 22.10, 'Deposit', 'C')];
    }
    TransactionService.prototype.getTransactionsForAccountId = function (accountId) {
        var foundTransactions = [];
        for (var i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].accountId == accountId) {
                foundTransactions.push(this.transactions[i]);
            }
        }
        return foundTransactions;
    };
    TransactionService.prototype.addTransaction = function (transaction) {
        transaction.transactionId = this.transactions.length;
        this.transactions.push(transaction);
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
//# sourceMappingURL=transaction.service.js.map