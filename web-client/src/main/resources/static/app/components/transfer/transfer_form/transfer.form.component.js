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
var transaction_service_1 = require('../../../services/transaction/transaction.service');
var forms_1 = require('@angular/forms');
var TransferFormComponent = (function () {
    function TransferFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.transferMade = new core_1.EventEmitter();
        this.transferForm = this.formBuilder.group({
            fromAccountId: [null, forms_1.Validators.required],
            toAccountId: [null, forms_1.Validators.required],
            amount: [0, forms_1.Validators.required]
        });
    }
    TransferFormComponent.prototype.transferFunds = function () {
        this.transfer = new transaction_service_1.Transfer(parseInt(this.transferForm.value.fromAccountId), parseInt(this.transferForm.value.toAccountId), parseFloat(this.transferForm.value.amount), 'Transfer');
        console.log(this.transfer);
        this.transferMade.emit(this.transfer);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TransferFormComponent.prototype, "accounts", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TransferFormComponent.prototype, "transferMade", void 0);
    TransferFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transfer-form-component',
            template: "<form [formGroup]=\"transferForm\" (submit)=\"transferFunds()\">\n\n\t<div class=\"form-group\">\n\t\t<label for=\"from_account\">From:</label> \n\t\t<select type=\"select\" class=\"form-control\" id=\"from_account\" formControlName=\"fromAccountId\">\n\t\t\t<option *ngFor=\"let account of accounts\" [value]=\"account.id\">{{account.name}}\n\t\t\t\t- Balance: {{account.balance}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"to_account\">To:</label> \n\t\t<select type=\"select\" class=\"form-control\" id=\"to_account\" formControlName=\"toAccountId\">\n\t\t\t<option *ngFor=\"let account of accounts\"\n\t\t  \t\t\t[value]=\"account.id\">{{account.name}}\n\t\t\t\t- Balance: {{account.balance}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"amount\">Amount:</label> <input type=\"number\"\n\t\t\tclass=\"form-control\" id=\"amount\" formControlName=\"amount\">\n\t\t<p class=\"help-text\" *ngIf=\"transferForm.controls.amount.errors\">Please\n\t\t\tenter an amount less than your balance!</p>\n\t</div>\n\t<div>\n\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Transfer\">\n\t</div>\n\n</form>" }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], TransferFormComponent);
    return TransferFormComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransferFormComponent;
//# sourceMappingURL=transfer.form.component.js.map