"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./Customer/Home/home.component');
var wishlist_component_1 = require('./Customer/Wishlist/wishlist.component');
var about_component_1 = require('./Customer/About/about.component');
var login_component_1 = require('./Customer/Login/login.component');
var cart_component_1 = require('./Customer/Cart/cart.component');
var checkout_component_1 = require('./Customer/CheckOut/checkout.component');
var contact_component_1 = require('./Customer/Contact/contact.component');
var blog_component_1 = require('./Customer/Blog/blog.component');
var blogdetail_component_1 = require('./Customer/BlogDetail/blogdetail.component');
var notfound_component_1 = require('./Customer/NotFound/notfound.component');
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'wishlist', component: wishlist_component_1.WishListComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'checkout', component: checkout_component_1.CheckOutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'blog-detail/:id', component: blogdetail_component_1.BlogDetailsComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map