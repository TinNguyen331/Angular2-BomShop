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
var BlogSharedComponent = (function () {
    function BlogSharedComponent() {
    }
    BlogSharedComponent.prototype.ngOnInit = function () { };
    BlogSharedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-blogshared',
            templateUrl: 'blogshared.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BlogSharedComponent);
    return BlogSharedComponent;
}());
exports.BlogSharedComponent = BlogSharedComponent;
//# sourceMappingURL=blogshared.component.js.map