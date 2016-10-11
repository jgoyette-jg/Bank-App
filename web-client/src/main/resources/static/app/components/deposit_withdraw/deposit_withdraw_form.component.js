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
var DepositWithdrawFormComponent = (function () {
    function DepositWithdrawFormComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DepositWithdrawFormComponent.prototype, "accounts", void 0);
    DepositWithdrawFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deposit_withdraw_form-component',
            template: "<form>\n\t  \t\t\t<div class=\"form-group\">\n\t  \t\t\t\t<label for=\"my_accounts\">Accounts:</label>\n\t  \t\t\t\t<select type=\"select\" class=\"form-control\" id=\"my_accounts\">\n\t  \t\t\t\t\t<option *ngFor=\"let account of accounts\">{{account.name}} - Balance:{{account.balance}}</option>\n\t  \t\t\t\t</select>\n\t  \t\t\t</div>\n\t  \t\t</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], DepositWithdrawFormComponent);
    return DepositWithdrawFormComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DepositWithdrawFormComponent;
//# sourceMappingURL=deposit_withdraw_form.component.js.map