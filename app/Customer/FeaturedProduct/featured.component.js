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
var featured_service_1 = require('./featured.service');
var dialog_component_1 = require('../DialogProduct/dialog.component');
var material_1 = require('@angular/material');
var cart_service_1 = require('../CartService/cart.service');
var FeatureComponent = (function () {
    function FeatureComponent(el, featureService, dialog, viewContainerRef, cartService) {
        this.el = el;
        this.featureService = featureService;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.cartService = cartService;
        this.quantity = 1;
    }
    FeatureComponent.prototype.open = function (product) {
        var _this = this;
        console.log(product);
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(dialog_component_1.DialogComponent, config);
        this.dialogRef.componentInstance.product = product;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
        });
    };
    FeatureComponent.prototype.addToCart = function (product) {
        this.cartService.addProduct(product, 1);
    };
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit");
        //console.log(this.productList);
        this.featureService.GetProductList().subscribe(function (response) {
            _this.productList = response;
        });
    };
    FeatureComponent.prototype.ngAfterViewInit = function () {
        console.log("On AfterViewInit");
    };
    FeatureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-feature',
            templateUrl: 'featured.component.html',
            providers: [featured_service_1.FeaturedService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, featured_service_1.FeaturedService, material_1.MdDialog, core_1.ViewContainerRef, cart_service_1.CartService])
    ], FeatureComponent);
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=featured.component.js.map