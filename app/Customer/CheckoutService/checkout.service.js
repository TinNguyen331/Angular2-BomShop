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
var BuyProductModel_1 = require('../Model/BuyProductModel');
var cart_service_1 = require('../CartService/cart.service');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var CheckOutService = (function () {
    function CheckOutService(cartService, _http) {
        this.cartService = cartService;
        this._http = _http;
        this.cusID = null;
        this.apiUrl = "http://localhost:8080/buyproduct";
        console.log(this.cartService.getCart());
    }
    CheckOutService.prototype.checkout = function () {
        this.data = new BuyProductModel_1.BuyProductModel(this.cusID.id, this.cartService.getCart(), 1);
        console.log(this.data);
        return this._http.post(this.apiUrl, this.data).map(function (response) { return response.json(); });
    };
    CheckOutService.prototype.setCusID = function (user) {
        console.log("User in service");
        console.log(user);
        this.cusID = user;
        console.log("User after set");
        console.log(this.cusID);
    };
    CheckOutService.prototype.getCusID = function () {
        console.log("Return value service");
        console.log(this.cusID);
        return this.cusID;
    };
    CheckOutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [cart_service_1.CartService, http_1.Http])
    ], CheckOutService);
    return CheckOutService;
}());
exports.CheckOutService = CheckOutService;
//# sourceMappingURL=checkout.service.js.map