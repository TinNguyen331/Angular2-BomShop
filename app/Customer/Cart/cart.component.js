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
var cart_service_1 = require('../CartService/cart.service');
var checkout_service_1 = require('../CheckoutService/checkout.service');
var CartComponent = (function () {
    function CartComponent(cartService, checkoutService) {
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.cart = [];
    }
    CartComponent.prototype.onPlus = function (pro) {
        console.log(pro);
        if (pro.quantity < 10)
            pro.quantity++;
    };
    CartComponent.prototype.onMinius = function (pro) {
        console.log(pro);
        if (pro.quantity > 1)
            pro.quantity--;
    };
    CartComponent.prototype.updateCart = function () {
        this.cartService.updateCart(this.cart);
    };
    CartComponent.prototype.checkout = function () {
        this.checkoutService.checkout().subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    CartComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.getCart();
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-cart',
            templateUrl: 'cart.component.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, checkout_service_1.CheckOutService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map