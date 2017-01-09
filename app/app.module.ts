import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HeaderComponent } from './Customer/Shared/Header/header.component';
import { AdvantageComponent } from './Customer/Shared/Advantage/advantage.component';
import { SliderComponent } from './Customer/Slider/slider.component';
import { CategoriesComponent } from './Customer/Categories/categories.component';
import { FeatureComponent } from './Customer/FeaturedProduct/featured.component';
import { EventComponent } from './Customer/Event/event.component';
import { ProductComponent } from './Customer/Product/product.component';
import { BlogSharedComponent } from './Customer/Shared/BlogShared/blogshared.component';
import { FooterComponent } from './Customer/Shared/Footer/footer.component';
import { HomeComponent } from './Customer/Home/home.component';
import { AboutComponent } from './Customer/About/about.component';
import { BlogComponent } from './Customer/Blog/blog.component';
import { BlogDetailsComponent } from './Customer/BlogDetail/blogdetail.component';
import { CartComponent } from './Customer/Cart/cart.component';
import { ProductDetailComponent } from './Customer/ProductDetail/productdetail.component';
import { WishListComponent } from './Customer/Wishlist/wishlist.component';
import { NotFoundComponent } from './Customer/NotFound/notfound.component';
import { CheckOutComponent } from './Customer/CheckOut/checkout.component';
import { ContactComponent } from './Customer/Contact/contact.component';
import { LoginComponent } from './Customer/Login/login.component';
import { CategoryDetailComponent } from './Customer/CategoryDetail/categorydetail.component';

@NgModule({
  imports: [BrowserModule, FormsModule ,HttpModule,appRoutes],
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvantageComponent,
    SliderComponent,
    CategoriesComponent,
    FeatureComponent,
    EventComponent,
    ProductComponent,
    BlogSharedComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    CartComponent,
    ProductDetailComponent,
    WishListComponent,
    NotFoundComponent,
    CheckOutComponent,
    ContactComponent,
    LoginComponent,
    CategoryDetailComponent
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
