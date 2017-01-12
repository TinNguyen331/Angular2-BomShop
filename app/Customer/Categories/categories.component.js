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
var material_1 = require('@angular/material');
var cart_service_1 = require('../CartService/cart.service');
var CategoriesComponent = (function () {
    function CategoriesComponent(el, dialog, viewContainerRef, cartService) {
        this.el = el;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.cartService = cartService;
        this.quantity = 1;
    }
    CategoriesComponent.prototype.addToCart = function (product) {
        this.cartService.addProduct(product, 1);
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-categories',
            templateUrl: 'categories.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, material_1.MdDialog, core_1.ViewContainerRef, cart_service_1.CartService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map