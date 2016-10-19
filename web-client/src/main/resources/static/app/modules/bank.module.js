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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var application_component_1 = require('../components/application/application.component');
var home_component_1 = require('../components/home/home.component');
var nav_component_1 = require('../components/nav/nav.component');
var account_component_1 = require('../components/account/account.component');
var account_detail_component_1 = require('../components/account/detail/account.detail.component');
var transaction_component_1 = require('../components/transaction/transaction.component');
var deposit_withdraw_form_component_1 = require('../components/deposit_withdraw/deposit_withdraw_form.component');
var transfer_component_1 = require('../components/transfer/transfer.component');
var transfer_form_component_1 = require('../components/transfer/transfer_form/transfer.form.component');
var login_component_1 = require('../components/user/login.component');
var registration_component_1 = require('../components/user/registration.component');
var account_service_1 = require('../services/account/account.service');
var transaction_service_1 = require('../services/transaction/transaction.service');
var user_service_1 = require('../services/user/user.service');
var BankModule = (function () {
    function BankModule() {
    }
    BankModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.default },
                    { path: 'account', component: account_component_1.default },
                    { path: 'account/:accountId', component: account_detail_component_1.default },
                    { path: 'dep_with', component: transaction_component_1.default },
                    { path: 'transfer', component: transfer_component_1.default },
                    { path: 'register', component: registration_component_1.default }
                ])
            ],
            declarations: [application_component_1.default,
                home_component_1.default,
                nav_component_1.default,
                account_component_1.default,
                account_detail_component_1.default,
                transaction_component_1.default,
                deposit_withdraw_form_component_1.default,
                transfer_component_1.default,
                transfer_form_component_1.default,
                login_component_1.default,
                registration_component_1.default],
            providers: [account_service_1.AccountService, transaction_service_1.TransactionService, user_service_1.UserService],
            bootstrap: [application_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], BankModule);
    return BankModule;
}());
exports.BankModule = BankModule;
//# sourceMappingURL=bank.module.js.map