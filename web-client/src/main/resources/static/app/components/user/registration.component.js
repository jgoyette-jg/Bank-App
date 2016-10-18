"use strict";
var user_service_1 = require('../../services/user/user.service');
var RegistrationComponent = (function () {
    function RegistrationComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.registrationMessage = null;
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    RegistrationComponent.prototype.register = function (user) {
        var user = new user_service_1.User(0, this.registrationForm.value.username, this.registrationForm.value.password, false);
        var registrationSuccess = this.userService.authenticateUser(user);
        console.log('Getting hit...');
        console.log(user);
        if (registrationSuccess) {
            console.log('User exists...');
            this.registrationMessage = 'User may already exist.';
        }
        else {
            console.log('Created user!!!');
        }
    };
    return RegistrationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map