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
var account_service_1 = require('../../../services/account/account.service');
var forms_1 = require('@angular/forms');
var AccountCreationForm = (function () {
    function AccountCreationForm(formBuilder) {
        this.formBuilder = formBuilder;
        this.accountCreated = new core_1.EventEmitter();
        this.accountForm = this.formBuilder.group({
            accountName: ["", forms_1.Validators.required],
            balance: [0, forms_1.Validators.required]
        });
    }
    AccountCreationForm.prototype.createAccount = function () {
        this.account = new account_service_1.Account(0, this.accountForm.value.accountName, this.accountForm.value.balance, []);
        this.accountCreated.emit(this.account);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AccountCreationForm.prototype, "accountCreated", void 0);
    AccountCreationForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-creation-form',
            template: "<form [formGroup]=\"accountForm\" (submit)=\"createAccount()\">\n\t  \t\t\t<div class=\"form-group\">\n\t  \t\t\t\t<label for=\"accountName\">Nickname:</label>\n\t  \t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"accountName\">\n\t  \t\t\t</div>\n\t  \t\t\t<div class=\"form-group\">\n\t  \t\t\t\t<label for=\"balance\">Balance:</label>\n\t  \t\t\t\t<input type=\"number\" class=\"form-control\" id=\"balance\" formControlName=\"balance\">\n\t  \t\t\t</div>\n\t  \t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\">Create</button>\n\t  \t\t\t</div>\n\t  \t\t</form>"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AccountCreationForm);
    return AccountCreationForm;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountCreationForm;
//# sourceMappingURL=account.creation.form.js.map