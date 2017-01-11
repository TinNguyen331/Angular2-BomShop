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
var Subject_1 = require('rxjs/Subject');
var CartService = (function () {
    function CartService() {
        this.cartList = [];
        this.cart = new Subject_1.Subject();
        this.content = this.cart.asObservable();
    }
    CartService.prototype.addProduct = function (product, quantity) {
        product.quantity = quantity;
        this.cart.next(product);
        this.cartList.push(product);
    };
    CartService.prototype.delProduct = function (product) {
        this.cartList.filter(function (pro) { return pro.productId != product.productId; });
    };
    CartService.prototype.getCart = function () {
        return this.cartList;
    };
    CartService.prototype.getTotalPrice = function () {
        var total = this.cartList.reduce(function (sum, cartItem) {
            return sum += cartItem.productPrice, sum;
        }, 0);
        return total;
    };
    CartService.prototype.getLength = function () {
        return this.cartList.length;
    };
    CartService.prototype.updateCart = function (cart) {
        this.cartList = cart;
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map