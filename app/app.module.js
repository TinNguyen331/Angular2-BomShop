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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var header_component_1 = require('./Customer/Shared/Header/header.component');
var advantage_component_1 = require('./Customer/Shared/Advantage/advantage.component');
var slider_component_1 = require('./Customer/Slider/slider.component');
var categories_component_1 = require('./Customer/Categories/categories.component');
var featured_component_1 = require('./Customer/FeaturedProduct/featured.component');
var event_component_1 = require('./Customer/Event/event.component');
var product_component_1 = require('./Customer/Product/product.component');
var blogshared_component_1 = require('./Customer/Shared/BlogShared/blogshared.component');
var footer_component_1 = require('./Customer/Shared/Footer/footer.component');
var home_component_1 = require('./Customer/Home/home.component');
var about_component_1 = require('./Customer/About/about.component');
var blog_component_1 = require('./Customer/Blog/blog.component');
var blogdetail_component_1 = require('./Customer/BlogDetail/blogdetail.component');
var cart_component_1 = require('./Customer/Cart/cart.component');
var productdetail_component_1 = require('./Customer/ProductDetail/productdetail.component');
var wishlist_component_1 = require('./Customer/Wishlist/wishlist.component');
var notfound_component_1 = require('./Customer/NotFound/notfound.component');
var checkout_component_1 = require('./Customer/CheckOut/checkout.component');
var contact_component_1 = require('./Customer/Contact/contact.component');
var login_component_1 = require('./Customer/Login/login.component');
var categorydetail_component_1 = require('./Customer/CategoryDetail/categorydetail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.appRoutes],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                advantage_component_1.AdvantageComponent,
                slider_component_1.SliderComponent,
                categories_component_1.CategoriesComponent,
                featured_component_1.FeatureComponent,
                event_component_1.EventComponent,
                product_component_1.ProductComponent,
                blogshared_component_1.BlogSharedComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                blog_component_1.BlogComponent,
                blogdetail_component_1.BlogDetailsComponent,
                cart_component_1.CartComponent,
                productdetail_component_1.ProductDetailComponent,
                wishlist_component_1.WishListComponent,
                notfound_component_1.NotFoundComponent,
                checkout_component_1.CheckOutComponent,
                contact_component_1.ContactComponent,
                login_component_1.LoginComponent,
                categorydetail_component_1.CategoryDetailComponent
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map