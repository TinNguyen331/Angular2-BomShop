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
var categorydetail_service_1 = require('./categorydetail.service');
var dialog_component_1 = require('../DialogProduct/dialog.component');
var material_1 = require('@angular/material');
var cart_service_1 = require('../CartService/cart.service');
var CategoryDetailComponent = (function () {
    function CategoryDetailComponent(el, router, activatedRoute, cateService, dialog, viewContainerRef, cartService) {
        var _this = this;
        this.el = el;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cateService = cateService;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.cartService = cartService;
        router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (val) {
            _this.onChangeURL();
        });
    }
    CategoryDetailComponent.prototype.onChangeURL = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.cateid = params['id'];
        });
        console.log(this.cateid);
        this.cateService.getCategoryDetailsList(this.cateid).subscribe(function (response) {
            _this.cateList = response;
            console.log(_this.cateList);
        });
    };
    CategoryDetailComponent.prototype.open = function (product) {
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
    CategoryDetailComponent.prototype.ngOnInit = function () {
    };
    CategoryDetailComponent.prototype.addToCart = function (product) {
        this.cartService.addProduct(product, 1);
    };
    CategoryDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-categorydetail',
            templateUrl: 'categorydetail.component.html',
            providers: [categorydetail_service_1.CategoryDetailsService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, router_1.ActivatedRoute, categorydetail_service_1.CategoryDetailsService, material_1.MdDialog, core_1.ViewContainerRef, cart_service_1.CartService])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());
exports.CategoryDetailComponent = CategoryDetailComponent;
//# sourceMappingURL=categorydetail.component.js.map