import { Component } from '@angular/core';
import { HomeComponent} from './Customer/Home/home.component';
import { AboutComponent} from './Customer/About/about.component';
import { BlogComponent} from './Customer/Blog/blog.component';
import { BlogDetailsComponent } from './Customer/BlogDetail/blogdetail.component';
import { WishListComponent } from './Customer/Wishlist/wishlist.component';
import { NotFoundComponent } from './Customer/NotFound/notfound.component';
import { CheckOutComponent } from './Customer/CheckOut/checkout.component';
import { ContactComponent } from './Customer/Contact/contact.component'; 

@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `
  <customer-about></customer-about>
  `,
})
export class AppComponent { }
