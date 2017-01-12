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
var checkout_service_1 = require('../CheckoutService/checkout.service');
var CheckOutComponent = (function () {
    function CheckOutComponent(checkoutService, router) {
        this.checkoutService = checkoutService;
        this.router = router;
    }
    CheckOutComponent.prototype.ngOnInit = function () { };
    CheckOutComponent.prototype.checkout = function () {
        console.log(this.checkoutService.getCusID());
        if (this.checkoutService.getCusID() == null) {
            alert("Please login to continue !!!");
            this.router.navigate(['/login']);
        }
        this.checkoutService.checkout().subscribe(function (response) {
            console.log(response);
            alert("Your order has been sent to us ! \n Thank you !");
        }, function (error) {
            alert("Have some error. Contact to admin to more info !");
            console.log(error);
        });
    };
    CheckOutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-checkout',
            templateUrl: 'checkout.component.html'
        }), 
        __metadata('design:paramtypes', [checkout_service_1.CheckOutService, router_1.Router])
    ], CheckOutComponent);
    return CheckOutComponent;
}());
exports.CheckOutComponent = CheckOutComponent;
//# sourceMappingURL=checkout.component.js.map