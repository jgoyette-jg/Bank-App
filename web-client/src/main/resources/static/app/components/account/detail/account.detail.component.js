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
var router_1 = require('@angular/router');
var account_service_1 = require('../../../services/account/account.service');
var transaction_service_1 = require('../../../services/transaction/transaction.service');
var AccountDetailComponent = (function () {
    function AccountDetailComponent(route, accountService, transactionService) {
        var accountId = parseInt(route.snapshot.params['accountId']);
        this.account = accountService.getAccountById(accountId);
        this.transactions = transactionService.getTransactionsForAccountId(accountId);
    }
    AccountDetailComponent = __decorate([
        core_1.Component({
            selector: 'account-detail',
            templateUrl: 'app/components/account/detail/account-detail.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, account_service_1.AccountService, transaction_service_1.TransactionService])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountDetailComponent;
//# sourceMappingURL=account.detail.component.js.map