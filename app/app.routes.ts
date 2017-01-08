import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Customer/Home/home.component';
import { WishListComponent } from './Customer/Wishlist/wishlist.component';
import { AboutComponent } from './Customer/About/about.component';
import { LoginComponent } from './Customer/Login/login.component';
import { CartComponent } from './Customer/Cart/cart.component';
import { CheckOutComponent } from './Customer/CheckOut/checkout.component';
import { ContactComponent } from './Customer/Contact/contact.component';
import { BlogComponent } from './Customer/Blog/blog.component';
import { BlogDetailsComponent } from './Customer/BlogDetail/blogdetail.component';
import { NotFoundComponent } from './Customer/NotFound/notfound.component';
import { CategoryDetailComponent } from './Customer/CategoryDetail/categorydetail.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'wishlist', component: WishListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'contact',component:ContactComponent},
    { path: 'blog',component:BlogComponent},
    { path: 'blog-detail/:id',component: BlogDetailsComponent},
    { path: 'category/:id',component:CategoryDetailComponent},
    { path: '**',component:NotFoundComponent}
    

]
export const appRoutes = RouterModule.forRoot(routing);