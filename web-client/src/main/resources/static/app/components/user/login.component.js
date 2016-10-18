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
var forms_1 = require('@angular/forms');
var user_service_1 = require('../../services/user/user.service');
var LoginComponent = (function () {
    function LoginComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.loginMessage = null;
        this.loginForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function () {
        var user = new user_service_1.User(0, this.loginForm.value.username, this.loginForm.value.password, false);
        user.authenticated = this.userService.authenticateUser(user);
        console.log('Getting hit...');
        console.log(user);
        if (!user.authenticated) {
            console.log('Not valid');
            this.loginMessage = 'Invalid credentials...';
        }
        else {
            console.log('Valid!');
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/components/user/login.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginComponent;
//# sourceMappingURL=login.component.js.map