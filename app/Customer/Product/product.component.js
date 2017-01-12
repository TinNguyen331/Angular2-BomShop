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
var product_service_1 = require('./product.service');
var dialog_component_1 = require('../DialogProduct/dialog.component');
var material_1 = require('@angular/material');
var ProductComponent = (function () {
    function ProductComponent(productService, el, dialog, viewContainerRef) {
        this.productService = productService;
        this.el = el;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.GetBestSeller().subscribe(function (response) {
            _this.bestseller = response;
        });
    };
    ProductComponent.prototype.open = function (product) {
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
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-product',
            templateUrl: 'product.component.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, core_1.ElementRef, material_1.MdDialog, core_1.ViewContainerRef])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map