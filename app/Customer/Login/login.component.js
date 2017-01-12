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
var login_service_1 = require('./login.service');
var checkout_service_1 = require('../CheckoutService/checkout.service');
var LoginComponent = (function () {
    function LoginComponent(checkoutService, loginService, router) {
        this.checkoutService = checkoutService;
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.Login = function (value) {
        var _this = this;
        console.log(value);
        this.loginService.Login(value).subscribe(function (response) {
            _this.user = response;
            console.log("In login");
            console.log(_this.user);
            _this.checkoutService.setCusID(_this.user);
            _this.router.navigate(['/']);
            alert("Login successful");
        }, function (error) {
            if (error.status == 404) {
                alert("Login fail");
                console.log("Tai Khoan Khong Ton Tai");
            }
        });
    };
    LoginComponent.prototype.Register = function (value) {
        var _this = this;
        console.log(value);
        if (value.passWord != value.confimPassWord) {
            console.log("PassWord do not match");
        }
        else {
            this.loginService.Register(value).subscribe(function (response) {
                alert("Register successful");
                _this.checkoutService.setCusID(_this.user);
                _this.router.navigate(['/']);
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-login',
            templateUrl: 'login.component.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [checkout_service_1.CheckOutService, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map