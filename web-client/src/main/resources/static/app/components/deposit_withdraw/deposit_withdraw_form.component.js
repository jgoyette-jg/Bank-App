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
var forms_1 = require('@angular/forms');
var DepositWithdrawFormComponent = (function () {
    function DepositWithdrawFormComponent() {
        this.transactionMade = new core_1.EventEmitter();
        this.account = new account_service_1.Account(0, null, 0, null);
        this.transaction = new transaction_service_1.Transaction(0, 0, 0, null, null);
        this.transactionForm = this.formBuilder.group({
            amount: [0, forms_1.Validators.required]
        });
    }
    DepositWithdrawFormComponent.prototype.select = function (account) {
        this.account = account;
        console.log(account);
    };
    DepositWithdrawFormComponent.prototype.deposit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DepositWithdrawFormComponent.prototype, "accounts", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DepositWithdrawFormComponent.prototype, "transactionMade", void 0);
    DepositWithdrawFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deposit_withdraw_form-component',
            template: "<form [formGroup]=\"transactionForm\">\n\t  \t\t\t<div class=\"form-group\">\n\t  \t\t\t\t<label for=\"my_accounts\">Accounts:</label>\n\t  \t\t\t\t<select type=\"select\" class=\"form-control\" id=\"my_accounts\" (change)=select($event.target.value)>\n\t  \t\t\t\t\t<option *ngFor=\"let account of accounts\" [value]=\"account\">{{account.name}} - Balance:{{account.balance}}</option>\n\t  \t\t\t\t</select>\n\t  \t\t\t</div>\n\t  \t\t\t<div class=\"form-group\">\n\t  \t\t\t\t<label for=\"amount\">Amount:</label>\n\t  \t\t\t\t<input type=\"text\" class=\"form-control\" id=\"amount\" formControlName=\"amount\">\n\t  \t\t\t\t<p class=\"help-text\" *ngIf=\"transactionForm.controls.amount.errors\">Please enter an amount less than your balance!</p>\n\t  \t\t\t</div>\n\t  \t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"deposit()\">Deposit</button>\n\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"withdraw()\">Withdraw</button>\n\t  \t\t\t</div>\n\t  \t\t</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], DepositWithdrawFormComponent);
    return DepositWithdrawFormComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DepositWithdrawFormComponent;
//# sourceMappingURL=deposit_withdraw_form.component.js.map