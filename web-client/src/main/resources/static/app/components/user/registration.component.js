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
var forms_1 = require('@angular/forms');
var user_service_1 = require('../../services/user/user.service');
var RegistrationComponent = (function () {
    function RegistrationComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.registrationMessage = null;
        this.registrationForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        var user = new user_service_1.User(0, this.registrationForm.value.username, this.registrationForm.value.password, false);
        this.userService.registerUser(user)
            .subscribe(function (user) { _this.router.navigate(['/']); }, function (error) { console.error(error); _this.registrationMessage = error; });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration-form',
            templateUrl: 'app/components/user/register.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, forms_1.FormBuilder, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map