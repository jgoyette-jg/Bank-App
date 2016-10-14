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
var account_service_1 = require('../../services/account/account.service');
var transaction_service_1 = require('../../services/transaction/transaction.service');
var TransferComponent = (function () {
    function TransferComponent(accountService, transactionService) {
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.accounts = [];
        this.accounts = this.accountService.getAccounts();
    }
    TransferComponent.prototype.transferMade = function (transfer) {
        console.log(transfer);
        this.accountService.updateAccount(new transaction_service_1.Transaction(0, transfer.fromAccountId, transfer.amount, transfer.description, 'D'));
        this.accountService.updateAccount(new transaction_service_1.Transaction(0, transfer.toAccountId, transfer.amount, transfer.description, 'C'));
        this.transactionService.transferFunds(transfer);
    };
    TransferComponent = __decorate([
        core_1.Component({
            selector: 'make-a-transaction',
            template: "<transfer-form-component [accounts]=\"accounts\" (transferMade)=\"transferMade($event)\"></transfer-form-component>"
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, transaction_service_1.TransactionService])
    ], TransferComponent);
    return TransferComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransferComponent;
//# sourceMappingURL=transfer.component.js.map