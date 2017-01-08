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
var FeatureComponent = (function () {
    function FeatureComponent(el) {
        this.el = el;
    }
    FeatureComponent.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).ready(function () {
            /*-------------------------------------
             jquery Featured Products slider activation code
             -------------------------------------*/
            $('#featured-products-carousel').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 3,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });
            /*-------------------------------------
             jquery Featured Products 2 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel2').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
            });
            /*-------------------------------------
             jquery Featured product 3 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel3').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 1],
            });
            /*-------------------------------------
             jquery Featured Products 4 slider activation code
             -------------------------------------*/
            $('#featured-products-carousel4').owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 5,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsMobile: [479, 1],
            });
        });
    };
    FeatureComponent.prototype.ngOnInit = function () { };
    FeatureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-feature',
            templateUrl: 'featured.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FeatureComponent);
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=featured.component.js.map